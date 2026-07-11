import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; // సేఫ్ అండ్ స్మూత్ యానిమేషన్స్ కోసం
import './MetaAd.css';
import CTACards from '../components/CTAcards'
import Footer from '../footer/Footer'


gsap.registerPlugin(ScrollTrigger);

const MetaAd = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Hero Left Side Text Animation
    gsap.from('.meta-hero-left *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Hero Right Image Entry
    gsap.from('.meta-hero-right-img', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3
    });

    // 2. Solutions Cards Scroll Animation (ఇక్కడ ఎర్రర్ రాకుండా పక్కా ట్రిగ్గర్ ఇచ్చాను)
  
  gsap.from('.meta-sol-card', {
  scrollTrigger: {
    trigger: '.meta-solutions-grid',
    start: 'top bottom-=50px', // యానిమేషన్ త్వరగా లోడ్ అవ్వడానికి మార్చాం
    toggleActions: 'play none none none', // ఇవి తీసేస్తే కార్డ్స్ కనిపించవు, ఇవి ముఖ్యం బ్రో
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: 'power2.out'
});

    // 3. Process Steps Scroll Animation
    gsap.from('.meta-process-step', {
      scrollTrigger: {
        trigger: '.meta-process-list',
        start: 'top bottom-=120px',
      },
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // 4. Why Choose Us Animation
    gsap.from('.meta-choose-card', {
      scrollTrigger: {
        trigger: '.meta-choose-grid',
        start: 'top bottom-=120px',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // 5. CTA Box Animation
    gsap.from('.meta-cta-box', {
      scrollTrigger: {
        trigger: '.meta-cta-box',
        start: 'top bottom-=100px',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

  }, { scope: containerRef });

  return (
    <div className="meta-page-wrapper" ref={containerRef}>
      {/* Sticky Background Image */}
      <div className="meta-sticky-bg"></div>

      <div className="meta-content-container">
        
        {/* Hero Section */}
        <header className="meta-hero-section">
          <div className="meta-hero-left">
            <span className="meta-badge">🎯 Meta Ads Management</span>
            <h1>Maximize Your ROI with Expert Meta Ads Management</h1>
            <p className="meta-lead-text">
              At AF AD Agency, we design strategic Facebook and Instagram advertising campaigns built specifically for advanced audience targeting, high-quality lead generation, and maximum return on investment (ROI).
            </p>
            <p className="meta-sub-text">
              We turn social media platforms into high-performing revenue channels by positioning your brand directly in front of the consumers who are most likely to convert.
            </p>
            <button className="meta-hero-btn">Connect Now</button>
          </div>
          
          <div className="meta-hero-right">
            <img 
              src="./meta-ads-mockup.png" 
              alt="Meta Advertising Dashboard" 
              className="meta-hero-right-img"
            />
          </div>
        </header>

        {/* Solutions Section */}
        <section >
          <h2 className="meta-section-title">Our Meta Advertising Solutions</h2>
          <div className="meta-solutions-grid">
            <div className="meta-sol-card">
              <h3>Strategic Facebook Ads</h3>
              <p>Reach a diverse global demographic with optimized feed placement, instant experiences, and behavioral targeting.</p>
            </div>
            <div className="meta-sol-card">
              <h3>Instagram Ads & Reels</h3>
              <p>Capture the attention of a younger, dynamic audience using visually stunning Stories, Explore page placement, and viral vertical video ads.</p>
            </div>
            <div className="meta-sol-card">
              <h3>Lead Generation Campaigns</h3>
              <p>Design specialized lead forms and conversion funnels to systematically capture high-intent potential clients.</p>
            </div>
            <div className="meta-sol-card">
              <h3>Retargeting & Custom Audiences</h3>
              <p>Re-engage past website visitors, warm leads, and existing customers to lower your customer acquisition cost.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="meta-section">
          <h2 className="meta-section-title">🛠️ Our Meta Ads Optimization Process</h2>
          <div className="meta-process-list">
            <div className="meta-process-step">
              <span className="meta-step-num">1</span>
              <div>
                <h3>Audience Definition & Setup</h3>
                <p>We craft precise custom and lookalike audiences based on geography, interests, and real-time demographic data.</p>
              </div>
            </div>
            <div className="meta-process-step">
              <span className="meta-step-num">2</span>
              <div>
                <h3>Ad Creative & Copywriting</h3>
                <p>Developing high-energy video ads, concise copy, and clear call-to-actions (CTAs) optimized specifically for mobile viewports.</p>
              </div>
            </div>
            <div className="meta-process-step">
              <span className="meta-step-num">3</span>
              <div>
                <h3>A/B Testing & Scaling</h3>
                <p>Testing variations of creatives and copy to scale the winning variations and eliminate wasted ad spend.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="meta-section">
          <h2 className="meta-section-title">🌟 Why Choose Us for Meta Ads?</h2>
          <div className="meta-choose-grid">
            <div className="meta-choose-card">
              <h3>Precision Targeting</h3>
              <p>Eliminating guesswork by placing ads where they generate maximum traction.</p>
            </div>
            <div className="meta-choose-card">
              <h3>Full Funnel Management</h3>
              <p>From initial brand awareness to the final conversion, we monitor every step.</p>
            </div>
            <div className="meta-choose-card">
              <h3>Transparent Tracking</h3>
              <p>Clear monitoring of conversions, cost-per-lead, and overall campaign performance.</p>
            </div>
          </div>
        </section>

        {/* CTA Box */}
       

        
           <CTACards 
          title="Ready to turn clicks into"
          spanText="customers?"
          btnText="Connect Now"
          
        />
       
       <Footer/>

      </div>
    </div>
  );
};

export default MetaAd;