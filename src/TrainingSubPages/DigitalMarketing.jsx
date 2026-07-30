import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; // అఫీషియల్ React హుక్
import './DigitalMarketing.css';
import CTACards from '../components/CTAcards'
import Footer from '../footer/Footer'
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketing = () => {
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
            <span className="dm-badge">Digital Marketing Services</span>
            <h1>Drive Sustainable Growth with Digital Marketing</h1>
            <p className="dm-lead-text">
              At AF AD Agency, we specialize in high-impact digital marketing strategies that boost brand visibility, drive traffic, and accelerate business growth.
            </p>
            <p className="dm-sub-text">
              In today’s fast-paced digital world, having a powerful online presence is crucial. We combine data-driven insights with creative strategy to connect your brand with the right audience.
            </p>
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
          <h2 className="dm-section-title">Our Digital Marketing Services</h2>
          <div className="dm-services-grid">
            <div className="dm-service-card">
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Optimize your website to rank higher on search engines, driving organic traffic and long-term visibility.</p>
            </div>
            <div className="dm-service-card">
              <h3>Social Media Marketing (SMM)</h3>
              <p>Build a vibrant online community and manage your brand presence across major social media platforms.</p>
            </div>
            <div className="dm-service-card">
              <h3>Content Marketing</h3>
              <p>Craft engaging and valuable content that resonates with your audience, builds authority, and nurtures customer trust.</p>
            </div>
            <div className="dm-service-card">
              <h3>Brand Strategy & Positioning</h3>
              <p>Define your brand’s identity, values, and unique market positioning to stand out clearly from competitors.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="dm-section">
          <h2 className="dm-section-title">🛠️ Our Digital Marketing Process</h2>
          <div className="dm-process-list">
            <div className="dm-process-step">
              <span className="dm-step-idx">1</span>
              <div>
                <h3>Research & Strategy</h3>
                <p>We analyze your business objectives, market trends, and competitor landscapes to build a tailored roadmap.</p>
              </div>
            </div>
            <div className="dm-process-step">
              <span className="dm-step-idx">2</span>
              <div>
                <h3>Execution & Campaign Management</h3>
                <p>Deploying highly targeted creative assets, copy, and structural workflows across digital platforms.</p>
              </div>
            </div>
            <div className="dm-process-step">
              <span className="dm-step-idx">3</span>
              <div>
                <h3>Optimization & Reporting</h3>
                <p>Continuously measuring key performance metrics to refine campaigns, boost engagement, and maximize your ROI.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="dm-section">
          <h2 className="dm-section-title">🌟 Why Choose Us for Digital Marketing?</h2>
          <div className="dm-choose-grid">
            <div className="dm-choose-card">
              <h3>Holistic Approach</h3>
              <p>Integrating SEO, social media, and content for unified brand communication.</p>
            </div>
            <div className="dm-choose-card">
              <h3>Experienced Professionals</h3>
              <p>A creative team backed by years of digital industry expertise.</p>
            </div>
            <div className="dm-choose-card">
              <h3>Results-Oriented</h3>
              <p>Focused purely on driving genuine traffic, solid leads, and sustainable conversions.</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Box */}
        
        
           <CTACards 
          title="Ready to scale your online"
          spanText="presence?"
          btnText="Connect Now"
          
        />
     
       <Footer/>
      </div>
    </div>
  );
};

export default DigitalMarketing;