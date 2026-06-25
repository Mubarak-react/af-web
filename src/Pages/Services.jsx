import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css'; // Pure vanilla CSS processing module pipeline map logic link code configuration here
import servicesImage from '../assets/images/servicesImage.svg'
import creativeStrategyAudit from '../assets/images/creativeStrategyAudit.svg'
import AverageRoseAcrossClient from '../assets/images/AverageRoseAcrossClient.svg'
import CTACards from '../components/CTAcards'
gsap.registerPlugin(ScrollTrigger);


const Services = () => {
  const mainViewRef = useRef(null);

  useEffect(() => {
    const animationCtx = gsap.context(() => {
      
      // 1. Initial Hero Entrance Animation
      gsap.from('.hero-animate-target', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // 2. Continuous Scroll-triggered Replay Mechanism
      const activeSections = document.querySelectorAll('.scroll-trigger-section');
      
      activeSections.forEach((sectionBlock) => {
        const animatedChildren = sectionBlock.querySelectorAll('.reveal-sub-node');
        
        gsap.from(animatedChildren, {
          scrollTrigger: {
            trigger: sectionBlock,
            start: 'top 82%',
            end: 'bottom 18%',
            toggleActions: 'play reverse play reverse', 
          },
          y: 40,
          opacity: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power2.out'
        });
      });

    }, mainViewRef);

    return () => animationCtx.revert();
  }, []);

  return (
    <div ref={mainViewRef} style={{ position: 'relative', width: '100%' }}>
      
      {/* BACKGROUND STICKY LAYER */}
      <div className="sticky-bg-layer" />

      {/* CORE WRAPPER DOM CONTAINER */}
      <div className="page-container-layout">
        
        {/* SECTION 1: HERO */}
        <section className="full-viewport-section services-hero-section-wrapper">
          <span className="section-label hero-animate-target">OUR EXPERTISE</span>
          <h1 className="hero-main-title hero-animate-target gradient-text">
            Commercial Ad
          </h1>
          <h1 className="hero-main-title hero-animate-target">Production That Drives Results</h1>
          <p className="hero-desc-para hero-animate-target">
            From cinematic frame-by-frame storytelling to high-conversion performance marketing, 
            we bridge the gap between creative artistry and digital dominance.
          </p>
        </section>

        {/* SECTION 2: PRODUCTION UNIT */}
        <section className="full-viewport-section scroll-trigger-section">
          <div className="split-grid-layout">
            
            <div className="camera-preview-box reveal-sub-node">
              <img src={servicesImage} alt="Commercial Production Unit (image_db9743.jpg)" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span className="section-label reveal-sub-node">🎥 PRODUCTION UNIT</span>
                <h2 className="reveal-sub-node" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '700', marginBottom: '12px' }}>Commercial Ad Production</h2>
                <p className="reveal-sub-node" style={{ color: '#a1a1aa', fontWeight: 300, lineHeight: 1.6 }}>
                  We focus on close client partnerships, prioritizing flawless ad production over rushed timelines. Our experienced team delivers strategic commercial content designed only to increase your revenue.
                </p>
              </div>
              
              <div className="inner-split-subgrid">
                <div className="glass-card-element reveal-sub-node">
                  <h3 style={{ color: '#C084FC', marginBottom: '8px', fontSize: '16px' }}>Cinematic Visuals</h3>
                  <p style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: 300, lineHeight: 1.5 }}>Learn the exact camera settings and lighting rules that professional filmmakers use. Upgrade your video quality right away and build a portfolio.</p>
                </div>
                <div className="glass-card-element reveal-sub-node">
                  <h3 style={{ color: '#3B82F6', marginBottom: '8px', fontSize: '16px' }}>Visual Storytelling</h3>
                  <p style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: 300, lineHeight: 1.5 }}>Our experienced team uses visual storytelling to connect your brand with your audience, prioritizing perfect quality over fast deadlines.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: DIGITAL PERFORMANCE MARKETING */}
        <section className="full-viewport-section scroll-trigger-section" style={{ flexDirection: 'column' }}>
          <div className="marketing-header-block">
            <h2 className="reveal-sub-node">Digital Performance <span className="gradient-text">Marketing</span></h2>
            <p className="reveal-sub-node" style={{ color: '#a1a1aa', fontWeight: 300 }}>Leveraging data-driven algorithms to scale your brand across the most powerful digital platforms on the planet.</p>
          </div>

          <div className="marketing-grid-container">
            {/* SEO Card */}
            <div className="glass-card-element col-7 reveal-sub-node">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Precision SEO & Content Strategy</h3>
              <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '14px', marginBottom: '16px', lineHeight: 1.5 }}>Dominate search engine rankings through deep technical optimization and semantic content modeling. We ensure your brand is found exactly when high-intent customers are searching.</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', background: 'rgba(167,139,250,0.15)', color: '#c084fc', padding: '4px 10px', borderRadius: '4px' }}>Technical SEO</span>
                <span style={{ fontSize: '11px', background: 'rgba(167,139,250,0.15)', color: '#c084fc', padding: '4px 10px', borderRadius: '4px' }}>Link Building</span>
                <span style={{ fontSize: '11px', background: 'rgba(167,139,250,0.15)', color: '#c084fc', padding: '4px 10px', borderRadius: '4px' }}>Data Analytics</span>
              </div>
            </div>

            {/* Ads Card */}
            <div className="glass-card-element col-5 reveal-sub-node">
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Google & Meta Ads</h3>
              <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '14px', lineHeight: 1.5 }}>High-performance paid acquisition strategies focused exclusively on driving immediate ROI, maximizing conversions, and scaling sustainable business growth.</p>
              <div className="progress-bar-track">
                <div className="progress-fill" style={{ width: '87%', background: 'linear-gradient(135deg, #C084FC 0%, #3B82F6 100%)' }}></div>
              </div>
              <span style={{ fontSize: '10px', color: '#a1a1aa', display: 'block', marginTop: '6px', letterSpacing: '0.1em' }}>87% AVG CTR IMPROVEMENT</span>
            </div>

            {/* Social Media Card */}
            <div className="glass-card-element col-4 reveal-sub-node">
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Social Media Marketing</h3>
              <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '13px', lineHeight: 1.5 }}>Our team will manage your social media pages to engage with targeted audiences and help to grow your engagement and sales.</p>
            </div>

            {/* Audit Card */}
            <div className="glass-card-element col-8 reveal-sub-node">
              <div className="inner-marketing-flex">
                <div className="camera-preview-box" style={{ height: '140px' }}>
                  <img src={creativeStrategyAudit} alt="Creative Strategy Analytics Graph (image_db9702.jpg)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Creative Strategy Audit</h3>
                  <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '13px', marginBottom: '8px', lineHeight: 1.5 }}>Every campaign begins with a comprehensive, deep-dive audit of your current digital ecosystem to identify friction points and unlock massive latent growth opportunities.</p>
                  <a href="#download" style={{ color: '#C084FC', fontSize: '12px', textDecoration: 'none', fontWeight: 'bold' }}>Download Sample Report →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY US & ANALYTICS METRICS */}
        <section className="full-viewport-section scroll-trigger-section">
          <div className="split-grid-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 className="reveal-sub-node" style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: '700', lineHeight: 1.2 }}>Why <span className="gradient-text">AF Studios</span> Leads <br />The Industry</h2>
              <p className="reveal-sub-node" style={{ color: '#a1a1aa', fontWeight: 300, lineHeight: 1.6 }}>Our experienced team values close client relationships and always prioritizes high-quality work over fast deadlines. We refuse to rush because our ultimate goal is creating powerful advertising that directly increases your sales.</p>
              
              <div className="feature-list reveal-sub-node">
                <div className="feature-item">
                  <span className="feature-icon">✓</span> <span>Uncompromising Quality</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span> <span>Quick Response to Client</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span> <span>ROI-Focused Strategy</span>
                </div>
              </div>
            </div>

            {/* Stats Glass Box */}
            <div className="glass-card-element reveal-sub-node" style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
              <div style={{ marginBottom: '16px' }}>
                <img src={AverageRoseAcrossClient} alt="Icon (image_db941a.jpg)" style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="gradient-text" style={{ fontSize: 'clamp(54px, 8vw, 72px)', fontWeight: '900', lineHeight: 1 }}>4.2x</h3>
              <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a1a1aa', margin: '12px 0 32px 0', fontWeight: 'bold' }}>Average ROAS Across Clients</p>
              
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', justifyWith: 'space-between', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span>Production Efficiency</span>
                    <span style={{ color: '#C084FC' }}>+35%</span>
                  </div>
                  <div className="progress-bar-track"><div className="progress-fill" style={{ width: '35%', backgroundColor: '#C084FC' }}></div></div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span>Engagement Rate</span>
                    <span style={{ color: '#3B82F6' }}>+110%</span>
                  </div>
                  <div className="progress-bar-track"><div className="progress-fill" style={{ width: '100%', backgroundColor: '#3B82F6' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <CTACards 
          title="Ready To Scale Your"
          spanText="Visual Presence?"
          description="Let's craft a bespoke strategy that combines elite cinematography with performance marketing that actually works."
          btnText="Book Free Consultation"
          btnText2="View Our Portfolio"
        />

      </div>
    </div>
  );
};
export default Services;