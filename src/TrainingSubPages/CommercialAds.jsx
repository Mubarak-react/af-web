import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; // అఫీషియల్ React హుక్
import './DigitalMarketing.css';
import CTACards from '../components/CTAcards'
import Footer from '../footer/Footer'
gsap.registerPlugin(ScrollTrigger);

const CommercialAds = () => {
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
  y: 30, // x: -40 బదులు y వ్రాస్తే లెఫ్ట్‌కి వెళ్ళిపోదు
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
            <span className="dm-badge">Commercial Ad Production Services</span>
            <h1 style={{fontSize: '40px'}}>At AF AD Agency, we specialize in creating high-impact ad films that tell your brand’s story and capture your audience’s attention.</h1>
            <p className="dm-lead-text">
              As a leading ad film production house in Hyderabad, we combine creativity, strategy, and technical expertise to craft engaging videos. From product advertisements to brand awareness campaigns, our team ensures each film resonates with your target audience.
            </p>
            {/* <p className="dm-sub-text">
              As a leading ad film production house in Hyderabad, we combine creativity, strategy, and technical expertise to craft engaging videos. From product advertisements to brand awareness campaigns, our team ensures each film resonates with your target audience.
            </p> */}
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
          <h2 className="dm-section-title">Types of Ad Films We Create</h2>
          <div className="dm-services-grid">
            <div className="dm-service-card">
              <h3>TV Commercials</h3>
              <p>Designed to grab attention and build a powerful brand presence. We ensure your message is memorable, engaging, and effective—whether it's a 30-second spot or a longer format.</p>
            </div>
            <div className="dm-service-card">
              <h3>Social Media Ads</h3>
              <p>Visually stunning, concise, and impactful ads optimized for platforms like Facebook, Instagram and YouTube to ensure your brand stands out.</p>
            </div>
            <div className="dm-service-card">
              <h3>OTT Ads</h3>
              <p>Tailored ads designed for streaming services like Netflix, Amazon Prime, and others, ensuring your brand gets maximum exposure through creative storytelling.</p>
            </div>
            <div className="dm-service-card">
              <h3>Brand Storytelling</h3>
              <p>Deeply connecting with your audience by telling your brand's unique narrative through emotionally resonant scripting, production, editing, and final delivery.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="dm-section">
          <h2 className="dm-section-title">Our Commercial Ad Process</h2>
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
          <h2 className="dm-section-title">🌟 Why Choose Us for Commercial Ads</h2>
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

export default CommercialAds;