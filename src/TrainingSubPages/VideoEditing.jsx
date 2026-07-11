import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // SPA client-side route tracking mechanics
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoEditing.css'; // Pure standard Vanilla CSS sync
import FeaturedCoursesCards from '../components/FeaturedCoursesCards';
import videoediting from '../assets/images/videoediting.svg'
import CTACards from '../components/CTAcards'
import VideoEditingImg from '../assets/images/videoeditingImage.svg'
import VideoEditingPortfolioDev from '../assets/images/VideoEditingPortfolioDev.svg'
import CurriculumButton from '../components/CurriculumButton'
import Footer from '../footer/Footer';
import VideoEditingCurriculum from '../assets/images/VIDEO EDITING & COLOR GRADING BROCHER AF STUDIOS 1.tif 1.svg'

gsap.registerPlugin(ScrollTrigger);

const VideoEditing = () => {
  const navigate = useNavigate();
  const rootTrainingScopeRef = useRef(null);

  // 4 Titles mapping directly inside object array with explicit route paths
  const coursesData = [
    { 
      img: 'image_ad9e03.jpg', 
      title: 'Cinematography Training', 
      desc: 'Industry-focused course teaching camera operations, cinematic lighting, and framing.',
      path: '/cinematography'
    },
    { 
      img: 'image_ad9e03.jpg', 
      title: 'Photography Training', 
      desc: 'Professional course covering camera handling, composition, and commercial photography.',
      path: '/photography'
    },
    { 
      img: 'image_ad9e03.jpg', 
      title: 'Video Editing Training', 
      desc: 'Advanced course covering post-production, color grading, and motion graphics.',
      path: '/video-editing'
    },
    { 
      img: 'image_ad9e03.jpg', 
      title: 'Gimbal & Drone Training', 
      desc: 'Focused on aerial cinematography and advanced camera stabilization techniques.',
      path: '/drone-gimbal'
    }
  ];

 useEffect(() => {
  // GSAP context scope handles clean tracking without leaks
  const animationsCtx = gsap.context(() => {
    
    // Hero entrance reveal setup execution
    gsap.from('.hero-anim-node', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Continuous loop animations handler for scrolling up & down every single time
    const scrollTriggeredSections = document.querySelectorAll('.scroll-animate-section');
    
    scrollTriggeredSections.forEach((sectionBlock) => {
      const structuralChildren = sectionBlock.querySelectorAll('.scroll-reveal-child');
      
      gsap.from(structuralChildren, {
        scrollTrigger: {
          trigger: sectionBlock,
          start: 'top 85%',
          end: 'bottom 15%',
          // Replays the animation every time you scroll up and down perfectly!
          toggleActions: 'play reverse play reverse', 
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out'
      });
    });

    // image_8f01c4.jpg లోని కార్డ్స్ కోసం - ప్రతి స్క్రోల్ కి యానిమేట్ అయ్యే ఎఫెక్ట్
    const cards = gsap.utils.toArray('.animate-card');
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 50, 
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%', 
            end: 'bottom 15%',
            // 'play reverse play reverse' ఇవ్వడం వల్ల పైకి/కిందికి ఎటు స్క్రోల్ చేసినా రిపీట్ అవుతుంది
            toggleActions: 'play reverse play reverse', 
          }
        }
      );
    });

    gsap.from('.anim-fade', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.anim-card', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.cards-container',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    // Section 2: Portfolio Visual (Left to Right)
    gsap.from('.anim-left', {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: '.portfolio-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
    
    gsap.from('.anim-right', {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.portfolio-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    // Section 3: Call to Action Elements
    gsap.from('.anim-cta', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

  }, rootTrainingScopeRef); // scope ref inside context

  return () => animationsCtx.revert(); // Clean state management teardown
}, []);

  return (
    <div ref={rootTrainingScopeRef} className="training-root-scope">
      
      {/* ORIGINAL STICKY COLOR BACKGROUND COMPONENT LAYER */}
      <div className="training-sticky-bg" />

      {/* CORE CANVAS FOR COMPONENT BLOCKS */}
      <div className="training-main-canvas">
        
        {/* SECTION 1: HERO VIEW */}
        <section className="training-section-block">
          <div className="hero-split-grid">
            <div>
              <span className="badge-label hero-anim-node">EXPERT-LED MEDIA TRAINING</span>
              <h1 className="hero-title-h1 hero-anim-node">
                Professional <span className="neon-text-gradient">Media</span> <br />
                Training Programs
              </h1>
              <p className="hero-desc-p hero-anim-node">
                Master the art of the cut. Learn advanced color grading, sound design, and narrative flow using industry standards like DaVinci Resolve and Adobe Premiere Pro.
              </p>
              <div className="flex-btn-wrap hero-anim-node">

                         <CurriculumButton 
                                  imageUrl={VideoEditingCurriculum} 
                                  buttonText="View Curriculum"
                                />
                {/* <button className="btn-secondary-outline" onClick={() => navigate('/syllabus')}>Download Syllabus</button> */}
              </div>
            </div>

            <div className="hero-anim-node" style={{ width: '100%' }}>
              <div className="cinematic-img-container">
                <img src={videoediting} alt="Professional production monitoring rig framework display setup" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURED SEGMENTS WITH EXPLICIT ROUTING PATH BUTTONS */}
       

        {/* SECTION 3: IMAGE 4 CARD DESIGN (IMAGE LEFT + TEXT OVERLAY ON TOP SAME TO SAME) */}
      

        <section>
        <div className="section-header anim-fade">
          <h2>Technical Precision Meets <span class="text-blue">Creative Soul</span></h2>
          {/* <p>From industry-standard software to advanced storytelling theories, we cover the entire spectrum of modern post-production.</p> */}
        </div>

        <div className="cards-container">
          {/* Card 1 */}
          <div className="card anim-card">
            <div className="card-icon">🎨</div>
            <h3>Color Grading</h3>
            <p>Master DaVinci Resolve. Learn color theory, matching shots, and creating high-end cinematic looks that define brand identity.</p>
            <ul>
              <li>Log & Raw Workflow</li>
              <li>Advanced Node Trees</li>
              <li>HDR Mastering</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="card anim-card">
            <div className="card-icon">⚡</div>
            <h3>Motion Design</h3>
            <p>Infuse energy into your edits with After Effects. Learn kinetic typography, VFX integration, and complex animation curves.</p>
            <ul>
              <li>Particle Systems</li>
              <li>3D Compositing</li>
              <li>Dynamic Link Workflow</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="card anim-card">
            <div className="card-icon">🔊</div>
            <h3>Sound Design</h3>
            <p>Film is 50% sound. Master audio mixing, soundscape construction, and emotional pacing using professional DAW tools.</p>
            <ul>
              <li>Foley & Sound FX</li>
              <li>Dialogue Leveling</li>
              <li>Spatial Audio</li>
            </ul>
          </div>
        </div>
      </section>
   <section className="portfolio-section">
        <div className="portfolio-visual anim-left">
          <div className="mockup-container">
            <img 
              src={VideoEditingPortfolioDev}
              alt="Project Showcase" 
              className="mockup-img" 
            />
          </div>
        </div>

        <div className="portfolio-content anim-right">
          <h2>Portfolio <span class="text-blue">Development</span></h2>
          <p>Don't just learn tools; build a career. Every student finishes with a high-end showreel curated by our creative directors.</p>
          
          <div className="feature-item">
            <div className="feature-icon">🧠</div>
            <div className="feature-text">
              <h4>Curation Sessions</h4>
              <p>1-on-1 feedback on your edits to ensure they meet agency standards.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">💼</div>
            <div className="feature-text">
              <h4>Agency Networking</h4>
              <p>Direct access to our network of production houses and marketing firms.</p>
            </div>
          </div>
        </div>
      </section>
<div className="section-container" >
    <div className="grid-layout">
      
      {/* Left Big Card */}
      {/* GSAP యానిమేషన్ బయట ఉన్న wrapper కి అవుతుంది */}
      <div className="card-wrapper animate-card"> 
        {/* హోవర్ జూమ్ ఎఫెక్ట్ ఈ లోపల ఉన్న inner కార్డ్ కి అవుతుంది */}
        <div className="card-inner main-card">
          <span className="badge">FLAGSHIP COURSE</span>
          <h1>Complete Post–Production Mastery</h1>
          <p>Our 12-week intensive program that takes you from zero to industry-ready. Learn the full AF workflow.</p>
          <div className="footer-text">+240 Graduates Hired This Year</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Top Row Card */}
        <div className="card-wrapper animate-card">
          <div className="card-inner top-card">
            <h2>Premiere Pro Workflow</h2>
            <p>Efficiency is everything. Learn the shortcuts, proxy workflows, and project management techniques used in top agencies.</p>
          </div>
        </div>

        {/* Bottom Row - Two Small Cards */}
        <div className="bottom-cards-container">
          <div className="card-wrapper animate-card">
            <div className="card-inner small-card cyan-glow">
              <span className="stat-number">40+</span>
              <p className="stat-label">High-res Assets Provided</p>
            </div>
          </div>
          
          <div className="card-wrapper animate-card">
            <div className="card-inner small-card">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="stat-label uppercase">Industry Certification</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

      

       {/* <section className="training-section-block scroll-animate-section" style={{ flexDirection: 'column' }}>
          <div className="section-header-centered">
            <h2 className="scroll-reveal-child">Featured <span className="neon-text-gradient">Courses</span></h2>
            <p className="scroll-reveal-child" style={{ color: '#a1a1aa', fontWeight: 300 }}>
              Specific skill tracks designed for specialized roles in the media industry.
            </p>
          </div>

          <div className="featured-modules-grid">
            {coursesData.map((course, idx) => (
              <div key={idx} className="premium-translucent-card module-thumbnail-card scroll-reveal-child">
                <div className="module-img-container">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="module-text-padding">
                  <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{course.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '12px', lineHeight: 1.5, fontWeight: 300 }}>{course.desc}</p>
                  
                
                  <button 
                    className="module-action-btn" 
                    onClick={() => navigate(course.path)}
                  >
                    View Module &rsaquo;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <CTACards 
        title="Ready To Scale Your"
        spanText="Visual Presence?"
        description="Let's craft a bespoke strategy that combines elite cinematography with performance marketing that actually works."
        btnText="Book Free Consultation"
        btnText2="View Our Portfolio"
      />
      
  <FeaturedCoursesCards/>
        <Footer/>
      </div>
      
    </div>
  );
};

export default VideoEditing;