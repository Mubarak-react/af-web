import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Briefcase, Users, BrainCircuit, CheckCircle, CalendarDays, MapPin, Video, Camera, ArrowRight } from 'lucide-react';
import './GimbalDrone.css';
import FeaturedCoursesCards from '../components/FeaturedCoursesCards';

// GSAP Plugins register చేయడం
gsap.registerPlugin(ScrollTrigger);


const coursesData = [
    {
      id: 1,
      icon: '🎬', // మీరు కావాలనుకుంటే ఇక్కడ Lucide icons లేదా React icons వాడుకోవచ్చు
      title: 'Advanced Cinematography',
      desc: 'Learn lighting techniques, camera movement theory, and visual composition used in award-winning productions.',
      bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600', 
      isLarge: true // ఫస్ట్ కార్డ్ వెడల్పుగా ఉండటానికి
    },
    {
      id: 2,
      icon: '📷',
      title: 'Photography',
      desc: 'Master commercial and editorial photography in high-end studio environments.',
      bgImage: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=600',
      isLarge: false
    },
    {
      id: 3,
      icon: '🎬',
      title: 'Video Editing',
      desc: 'Advanced color grading, sound design, and narrative flow in DaVinci Resolve and Premiere Pro.',
      bgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
      isLarge: false
    },
    {
      id: 4,
      icon: '✈️',
      title: 'Drone & Gimbal Handling',
      desc: 'Master aerial cinematography and stabilized ground movements for dynamic, high-budget cinematic looks.',
      bgImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600',
      isLarge: true // ఫోర్త్ కార్డ్ వెడల్పుగా ఉండటానికి
    }
  ];

const GimbalDrone = () => {
  const containerRef = useRef(null);

useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Animation
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 2. "Other Courses" Section Title Animation
      gsap.fromTo('.courses-title-area > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.courses-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 3. Grid Cards Animation
      const cards = gsap.utils.toArray('.course-card');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      });

      // 4. Premium Bundle Cards Animation
      const premiumCards = gsap.utils.toArray('.premium-card');
      premiumCards.forEach((pCard) => {
        gsap.fromTo(pCard,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: pCard,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

      // ==========================================
      // 5. NEW: DroneGimbal Cards Animation (మీరు అడిగిన కొత్త సెక్షన్ యానిమేషన్)
      // ==========================================
      const droneCards = gsap.utils.toArray('.droneGimbalCard');
      droneCards.forEach((dCard) => {
        gsap.fromTo(dCard,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: dCard,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

    }, containerRef); // Scope to containerRef

    // మిగిలిన మీ పాత యానిమేషన్స్ యథాతథంగా కింద ఉన్నాయి
    const featureCards = gsap.utils.toArray('.feature-card');
    featureCards.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });

    gsap.fromTo('.pricing-intro-content',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: '.pricing-intro',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );

    gsap.fromTo('.pricing-detail-panel',
      { opacity: 0, scale: 0.98, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-detail-panel',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );

    gsap.fromTo('.claim-seat-btn',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.4,
        scrollTrigger: {
          trigger: '.claim-seat-btn',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );

    return () => ctx.revert();
  }, []);
  return (
    <div className="page-wrapper" ref={containerRef}>
      {/* Sticky Background Glow Image */}
      <div className="sticky-bg"></div>

      {/* Content Layer */}
      <div className="content-layer">
        
        {/* SECTION 1: HERO */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="tagline">PROFESSIONAL EDUCATION</span>
            <h1 className="main-title">
              Drone, Gimbal & Video <span className="blue-gradient-text">Training Program</span>
            </h1>
            <p className="hero-desc">
              Master the full spectrum of modern visual storytelling. From high-end cinematography to 
              professional post-production, gain the skills to lead industry-grade creative projects.
            </p>
            <div className="btn-group">
              <button className="btn-primary">Enroll in the Bundle</button>
              <button className="btn-secondary">View Curriculum</button>
            </div>
          </div>
        </section>

        {/* SECTION 2: OTHER COURSES */}
       

       

        {/* SECTION 3: PREMIUM BUNDLE */}
        <section className="premium-section">
          <div className="premium-header">
            <h2>The <span className="blue-gradient-text">Premium Bundle</span></h2>
            <p>Five core disciplines integrated into one mastery track.</p>
          </div>

         <div ref={containerRef} className="droneGimbalContainer">
      <div className="droneGimbalGrid">
        {coursesData.map((course) => (
          <div 
            key={course.id} 
            className={`droneGimbalCard ${course.isLarge ? 'droneGimbalWide' : 'droneGimbalNormal'}`}
            style={{ '--bg-image': `url(${course.bgImage})` }}
          >
            {/* కార్డు లోపల ఉండే డార్క్ గ్రేడియంట్ ఓవర్లే */}
            <div className="droneGimbalOverlay"></div>
            
            <div className="droneGimbalContent">
              <div className="droneGimbalIconArea">
                <span className="droneGimbalIcon">{course.icon}</span>
              </div>
              <h3 className="droneGimbalTitle">{course.title}</h3>
              <p className="droneGimbalDesc">{course.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
               <section className="gimbal-feature-section">
          <div className="features-container">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="icon-container purple-bg">
                <BrainCircuit className="feature-icon" size={24} />
              </div>
              <h3 className="feature-title">Hands-On Practical</h3>
              <p className="feature-description">
                No dry lectures. You get immediate access to pro gear including Red Komodo, 
                Professional studio lighting systems, and DJI drones from day one.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="icon-container purple-bg">
                <Briefcase className="feature-icon" size={24} />
              </div>
              <h3 className="feature-title">Real Client Projects</h3>
              <p className="feature-description">
                Work on actual agency briefs. Graduate with a professional portfolio that features 
                real commercial work for real brands.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="icon-container teal-bg">
                <Users className="feature-icon" size={24} />
              </div>
              <h3 className="feature-title">Industry Mentorship</h3>
              <p className="feature-description">
                1-on-1 feedback sessions with active industry professionals who know what it 
                takes to succeed in the market.
              </p>
            </div>
          </div>
        </section>
{/* 
        <section className="pricing-section">
          <div className="pricing-grid">
            
            
            <div className="pricing-intro">
              <div className="pricing-intro-content">
                <h2 className="cine-logo">CineCombo</h2>
                <h3 className="bundle-title">Full-Access</h3>
                
                <ul className="bundle-features">
                  <li><CheckCircle size={18} className="check-icon" /> 5 Complete Modules (Cinematography to Editing)</li>
                  <li><CheckCircle size={18} className="check-icon" /> Access to AF studio  during training</li>
                  <li><CheckCircle size={18} className="check-icon" /> Official AF Studio Certification</li>
                  <li><CheckCircle size={18} className="check-icon" /> Job Placement Assistance Program</li>
                </ul>
                
                <div className="pricing-details">
                  <span className="original-price">$2,499</span>
                  <div className="price-tag">
                    <span className="sale-price">$1,499</span>
                    <span className="payment-type">One-time payment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-detail-panel">
              <div className="enrollment-wrapper">
                <div className="enrollment-tag">ENROLLMENT OPEN</div>
              </div>

              <div className="limited-info">
                <h4 className="info-title">Limited Availability</h4>
                <p className="info-desc">
                  To ensure high-quality mentorship and equipment access, we only accept 
                  15 students per cohort. The next session begins next month.
                </p>
              </div>

              <div className="info-list">
                <div className="info-item">
                  <div className="item-icon-box"><CalendarDays size={20} /></div>
                  <div className="item-text">
                    <p className="item-label">Next Cohort Starts</p>
                    <p className="item-value">October 15, 2024</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="item-icon-box"><MapPin size={20} /></div>
                  <div className="item-text">
                    <p className="item-label">Location</p>
                    <p className="item-value">AF Studios & Field Locations</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="cta-container">
            <button className="claim-seat-btn">Claim My Seat</button>
          </div>
        </section> */}
          <FeaturedCoursesCards/>
      </div>

     
    </div>
  );
};

export default GimbalDrone;