import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './photography.css';
import FeaturedCoursesCards from '../components/FeaturedCoursesCards';

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.scroll-section');

    sections.forEach((section) => {
      const elementsToAnimate = section.querySelectorAll('.animate-on-scroll');

      // నీ ఆల్రెడీ ఉన్న యానిమేషన్ కోడ్ ఇక్కడే ఉంది
      gsap.fromTo(
        elementsToAnimate,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse', 
          },
        }
      );
    });
  }, []);

  return (
    <div className="cinecombo-page" ref={containerRef}>
      {/* Sticky Background Layer */}
      <div className="sticky-bg"></div>

      {/* Hero Section */}
      <section className="scroll-section hero-section">
        <div className="content-wrapper animate-on-scroll">
          <span className="subtitle">MASTER THE LENS</span>
          <h1 className="hero-title">
            Professional <span>Photography</span> Training
          </h1>
          <p className="hero-desc">
            Bridge the gap between technical mastery and creative artistry. Join our elite
            program designed for the next generation of visual storytellers.
          </p>
          <div className="btn-group">
            <button className="btn-primary">Enroll in CineCombo</button>
            <button className="btn-secondary">View Curriculum</button>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
       <section className="photography-wrapper" >
      <div className="photography-grid">
        
        {/* Module 1 */}
        <div className="photography-card photography-mod-1">
          <div className="photography-card-header">
            <span className="photography-module-tag">Module 01</span>
            {/* Camera Icon */}
            <svg className="photography-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <h2 className="photography-title">Technical Fundamentals</h2>
          <div className="photography-features-grid">
            <div className="photography-feature-item">
              <span className="photography-check">✓</span> Manual Exposure Mastery
            </div>
            <div className="photography-feature-item">
              <span className="photography-check">✓</span> Lens Physics & Selection
            </div>
            <div className="photography-feature-item">
              <span className="photography-check">✓</span> Depth of Field Control
            </div>
            <div className="photography-feature-item">
              <span className="photography-check">✓</span> Sensor Dynamics & RAW data
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="photography-card photography-mod-2">
          <div className="photography-card-header">
            <span className="photography-module-tag">Module 02</span>
            {/* Sun/Light Icon */}
            <svg className="photography-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.22" x2="5.64" y2="17.78" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>
          <h2 className="photography-title">Light Shaping</h2>
          <p className="photography-description">
            Master the art of sculpting with light, from natural high-key to dramatic low-key studio setups.
          </p>
        </div>

        {/* Module 3 */}
        <div className="photography-card photography-mod-3">
          <div className="photography-card-header">
            <span className="photography-module-tag">Module 03</span>
          </div>
          <h2 className="photography-title">The Creative Eye</h2>
          <p className="photography-description">
            Composition theories, psychological impact of color, and developing your unique visual signature.
          </p>
        </div>

        {/* Module 4 */}
        <div className="photography-card photography-mod-4">
          <div className="photography-card-header">
            <span className="photography-module-tag">Module 04</span>
          </div>
          <h2 className="photography-title">Post-Processing Workflow</h2>
          
          <div className="photography-sub-cards-container">
            <div className="photography-sub-card">
              {/* Brush Icon */}
              <svg className="photography-sub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M7.5 10.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" />
                <path d="M11.5 7.5c.828 0 1.5-.672 1.5-1.5S12.328 4.5 11.5 4.5 10 5.172 10 6s.672 1.5 1.5 1.5z" />
                <path d="M16.5 9.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" />
                <path d="M6 14c0-2 2-3 4-3 2.5 0 4.5 1.5 5 4 .5 2.5-1.5 5-4 5H6v-6z" />
              </svg>
              <span>Advanced Color Grading</span>
            </div>

            <div className="photography-sub-card">
              {/* Magic Wand Icon */}
              <svg className="photography-sub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 4 5 5" />
                <path d="m3 21 12-12" />
                <path d="M20.7 5.3a2.1 2.1 0 0 0-3 0l-1.8 1.8 3 3 1.8-1.8a2.1 2.1 0 0 0 0-3Z" />
              </svg>
              <span>Retouching Mastery</span>
            </div>

            <div className="photography-sub-card">
              {/* Cloud Icon */}
              <svg className="photography-sub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-3.64-6.5-6-9.5-2.36 3-6 6.71-6 9.5A3.5 3.5 0 0 0 12.5 19h5z" />
              </svg>
              <span>Digital Asset Mgmt</span>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* Who Is This For Section */}
      <section className="scroll-section target-section">
        <h2 className="section-title animate-on-scroll">Who Is This <span>For?</span></h2>
        <p className="section-subtitle animate-on-scroll">Tailored instruction for creators at every stage of their journey.</p>
        <div className="cards-grid-3">
          <div className="photography-glass-card animate-on-scroll">
            <h3>Aspiring Artists</h3>
            <p>Beginners looking to build a rock-solid technical foundation and find their voice.</p>
          </div>
          <div className="photography-glass-card animate-on-scroll">
            <h3>Pivot Professionals</h3>
            <p>Commercial photographers looking to upgrade their cinematography and high-end studio skills.</p>
          </div>
          <div className="photography-glass-card animate-on-scroll">
            <h3>Content Strategists</h3>
            <p>Marketing leads who need to understand high-end production to lead creative teams effectively.</p>
          </div>
        </div>
      </section>

      {/* Other Courses Section */}
     

      {/* CTA Section */}
      <section className="scroll-section cta-section">
        <div className="photography-glass-card cta-box animate-on-scroll">
          <h2>Ready To Master The <span>CineCombo?</span></h2>
          <p>Our exclusive hybrid training program combines high-end cinematography with strategic performance marketing insights. Spots are limited.</p>
          <div className="cta-meta">
            <span>🕒 Next Intake: Oct 2026</span>
            <span>👥 8 Slots Remaining</span>
          </div>
          <button className="btn-primary">Enroll in CineCombo</button>
        </div>
      </section>
        <section className="scroll-section courses-section">
        <FeaturedCoursesCards/>
      </section>
    </div>
  );
};

export default Photography;