import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  Aflogo from '../assets/images/Aflogo.svg'
import './Footer.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    // 1. Footer Columns Animation
    gsap.fromTo('.footer-col',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.footer-main-content',
          start: "top 95%",   // ఫుటర్ టాప్ స్క్రీన్ కింద నుండి 95% కి రాగానే స్టార్ట్ అవుతుంది
          end: "bottom bottom", 
          toggleActions: "play none none reverse", // స్క్రోల్ అవ్వకపోయినా సేఫ్ గా ప్లే అవ్వడానికి
          scrub: 0.5 // స్క్రబ్బింగ్ ని కొంచెం స్మూత్ చేసాం
        }
      }
    );

    // 2. Bottom Copyright line smooth fade in
    gsap.fromTo('.footer-bottom-bar',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.footer-bottom-bar',
          start: "top 98%",
          toggleActions: "play none none reverse",
          scrub: 0.5
        }
      }
    );
  }, { scope: footerRef }); // Scope పర్ఫెక్ట్ గా ఉంది బ్రో

  return (
    <footer ref={footerRef} className="footer-section-wrapper">
      <div className="footer-main-content">
        
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-info-col">
          <div className="footer-logo-box">
          <img className='Aflogo-Footer' src={Aflogo}/>
          </div>
          <p className="brand-brief-text">
            Leading Commercial Ad Agency & Digital Marketing Company based in Hyderabad. We transform brands through creative visual storytelling.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#services">Services</a></li>
            <li><a href="#training">Training Programs</a></li>
            <li><a href="#cinecombo">Cine Combo</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>

        {/* Column 3: Services Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links-list">
            <li><a href="#ad-prod">Ad Production</a></li>
            <li><a href="#seo">SEO Services</a></li>
            <li><a href="#meta">Meta Ads</a></li>
            <li><a href="#editing">Video Editing</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-col contact-info-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <div className="contact-item-row">
            <span className="contact-icon">📍</span>
            <p className="contact-text">VC Plaza, 1st Floor, Opp SBI Bank, Kukatpally, Hyderabad</p>
          </div>
          <div className="contact-item-row">
            <span className="contact-icon">✉️</span>
            <p className="contact-text">contact@afadagency.com</p>
          </div>
        </div>
                       
      </div>
         <div className='bottom-text'>
            <p className="copyright-text">© 2024 AF Ad Agency & Studios. All Rights Reserved.</p>
                     <div className='footer-social-links'>
                      <a href='#'>Instagram</a>
                <a href='#'>Facebook</a>
                <a href='#'>LinkedIn</a>
                <a href='#'>YouTube</a>
                     </div>
          
          </div>  
      {/* Footer Bottom Bar: Copyright & Socials */}
      
    </footer>
  );
};

export default Footer;