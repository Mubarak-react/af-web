import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; // అఫీషియల్ React హుక్
import './DigitalMarketing.css';
import CTACards from '../components/CTAcards'
import Footer from '../footer/Footer'
gsap.registerPlugin(ScrollTrigger);

const MetaAd = () => {
  const containerRef = useRef(null);

  // useEffect ప్లేస్‌లో useGSAP వాడాలి. ఇది డబుల్ రెండరింగ్ ఇష్యూని ఫిక్స్ చేస్తుంది.
  useGSAP(() => {
    
    // 1. Hero Left Side Text Animation
    gsap.from('.dm-hero-left *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.18,
      ease: 'power3.out'
    });

    gsap.from('.dm-hero-right-img', {
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    });

    // 2. Services Cards Scroll Animation (ఇక్కడ ఇష్యూ ఫిక్స్ చేశా)
    // మొదట కార్డ్స్ స్టేట్‌ని క్లియర్ గా సెట్ చేస్తున్నాం
    gsap.from('.dm-service-card', {
      scrollTrigger: {
        trigger: '.dm-services-grid', // మెయిన్ గ్రిడ్ బాక్స్ ట్రిగ్గర్
        start: 'top bottom-=100px',  // స్క్రీన్ కింద భాగంలోకి రాగానే అనిమేట్ అవుతుంది
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });

    // 3. Process Steps Scroll Animation
    gsap.from('.dm-process-step', {
      scrollTrigger: {
        trigger: '.dm-process-list',
        start: 'top bottom-=100px',
      },
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // 4. Why Choose Us Animation
    gsap.from('.dm-choose-card', {
      scrollTrigger: {
        trigger: '.dm-choose-grid',
        start: 'top bottom-=100px',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

  }, { scope: containerRef }); // scope ఇవ్వడం వల్ల కేవలం ఈ కంటైనర్ లోపల ఉన్నవే అనిమేట్ అవుతాయి

  return (
    <div className="dm-page-wrapper" ref={containerRef}>
      <div className="dm-sticky-bg"></div>

      <div className="dm-content-container">
        {/* Hero Section */}
        <header className="dm-hero-section">
          <div className="dm-hero-left">
            <span className="dm-badge">Meta Ads Management</span>
            <h1>Maximize Your ROI with Expert Meta Ads Management</h1>
            <p className="dm-lead-text">
At AF AD Agency, we design strategic Facebook and Instagram advertising campaigns built specifically for advanced audience targeting, high-quality lead generation, and maximum return on investment (ROI).            </p>
            <p className="dm-sub-text">
We turn social media platforms into high-performing revenue channels by positioning your brand directly in front of the consumers who are most likely to convert.            </p>
            <button className="dm-hero-btn">Connect Now</button>
          </div>
          
          <div className="dm-hero-right">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
              alt="Digital Marketing Dashboard" 
              className="dm-hero-right-img"
            />
          </div>
        </header>

        {/* Services Section */}
        <section className="dm-section">
          <h2 className="dm-section-title">Our Meta Advertising Solutions</h2>
          <div className="dm-services-grid">
            <div className="dm-service-card">
              <h3>Strategic Facebook Ads</h3>
              <p>
Reach a diverse global demographic with optimized feed placement, instant experiences, and behavioral targeting.                </p>
            </div>
            <div className="dm-service-card">
              <h3>Instagram Ads & Reels</h3>
              <p>
Capture the attention of a younger, dynamic audience using visually stunning Stories, Explore page placement, and viral vertical video ads.                </p>
            </div>
            <div className="dm-service-card">
              <h3>Lead Generation Campaigns</h3>
              <p>
Design specialized lead forms and conversion funnels to systematically capture high-intent potential clients.                </p>
            </div>
            <div className="dm-service-card">
              <h3>Retargeting & Custom Audiences</h3>
              <p>
            Re-engage past website visitors, warm leads, and existing customers to lower your customer acquisition cost.
                </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="dm-section">
          <h2 className="dm-section-title">Our Meta Ads Optimization Process</h2>
          <div className="dm-process-list">
            <div className="dm-process-step">
              <span className="dm-step-idx">1</span>
              <div>
                <h3>Audience Definition & Setup</h3>
                <p>
We craft precise custom and lookalike audiences based on geography, interests, and real-time demographic data.                  </p>
              </div>
            </div>
            <div className="dm-process-step">
              <span className="dm-step-idx">2</span>
              <div>
                <h3>
Ad Creative & Copywriting
</h3>
                <p>
Developing high-energy video ads, concise copy, and clear call-to-actions (CTAs) optimized specifically for mobile viewports.                  </p>
              </div>
            </div>
            <div className="dm-process-step">
              <span className="dm-step-idx">3</span>
              <div>
                <h3>A/B Testing & Scaling</h3>
                <p>
Testing variations of creatives and copy to scale the winning variations and eliminate wasted ad spend.                  </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dm-section">
          <h2 className="dm-section-title"> Why Choose Us for Meta Ads?</h2>
          <div className="dm-choose-grid">
            <div className="dm-choose-card">
              <h3>Precision Targeting</h3>
              <p>Eliminating guesswork by placing ads where they generate maximum traction.</p>
            </div>
            <div className="dm-choose-card">
              <h3>Full Funnel Management</h3>
              <p>From initial brand awareness to the final conversion, we monitor every step.</p>
            </div>
            <div className="dm-choose-card">
              <h3>Transparent Tracking</h3>
              <p>Clear monitoring of conversions, cost-per-lead, and overall campaign performance.</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Box */}
        
        
           <CTACards 
          title="Ready to turn clicks into "
          spanText="customers?"
          btnText="Connect Now"
          
        />
     
       <Footer/>
      </div>
    </div>
  );
};

export default MetaAd;