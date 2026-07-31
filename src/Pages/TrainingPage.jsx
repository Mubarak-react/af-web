

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Path proper ga set cheskondi
import BGimage from '../assets/images/BGImage.svg';
import Footer from '../footer/Footer.jsx';
import CTACards from '../components/CTAcards.jsx';
import ProfessionalCameraTraining from '../assets/images/Professional Camera Training.svg';
import FeaturedCoursesCards from '../components/FeaturedCoursesCards.jsx';


import './Training.css'; // Pure CSS import

gsap.registerPlugin(ScrollTrigger);

const TrainingPage = () => {

 


  return (
    

          <>
          
           <div 
            className="training-bg-container" 
            style={{ backgroundImage: `url(${BGimage})` }}
          ></div>

          <div className="training-wrapper" >
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">EXPERT-LED MEDIA TRAINING</span>
          <h1 className='training-heading'>
            Professional <span className="highlight-text">Media</span> Training <span className="highlight-text">Programs</span>
          </h1>
          <p className="hero-description">
            Master industry-standard tools and techniques with our practical hands-on training courses led by experts. Elevate your creative vision to professional production standards.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              View Curriculum <span>&rarr;</span>
            </button>
            
          </div>
        </div>

        <div className="hero-media">
          <div className="image-container" >
            <img
              src={ProfessionalCameraTraining}
              alt="Professional Camera Operator"
            />
            <div className="image-overlay-glow"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CINECOMBO PROGRAM */}
    

      <div className="quad-cards-grid">
            {[
              { icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),  title: 'Hands-On Practical Training', desc: 'Direct access to industry-standard equipment including ARRI, RED, and Blackmagic systems.' },
             
      
      {  icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      ), title: 'Industry certification', desc: 'Walk away with an industry-recognized certificate that transforms your passion into a fully qualified professional career.' },
              { icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      ),title: 'Placement Assistance', desc: 'To start your journey , Gain a direct line to media agencies and production houses actively recruiting trained creators.' },
              { icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ), title: 'Portfolio Development', desc: 'Leave with a professional showreel that showcases your technical skills to employers.' }
            ].map((cardInfo, index) => (
              <div key={index} className="transparent-glass-card scroll-reveal-child">
                <span className="card-icon">{cardInfo.icon}</span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '4px' }}>{cardInfo.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '13px', lineHeight: 1.5, fontWeight: 300 }}>{cardInfo.desc}</p>
              </div>
            ))}
          </div>


      <FeaturedCoursesCards/>

        {/* SECTION 4: CALL TO ACTION */}
        <CTACards 
          title="Ready to Start Your Career in"
          spanText="Media?"
          description="Enroll today and get hands-on experience with the same tools used by the world's leading production houses."
          btnText="Apply Now"
          btnText2="Talk To A Mentor"
        />
         <Footer/>
    </div>
          </>
  );
};

export default TrainingPage;