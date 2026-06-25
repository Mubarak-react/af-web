import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    // Footer లోపల ఉన్న కాలమ్స్ స్క్రోల్ చేసినప్పుడు స్మూత్ గా పైకి లేస్తూ వస్తాయి (Scrub Method)
    gsap.fromTo('.footer-col',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.footer-main-content',
          start: "top 95%",
          end: "top 75%",
          scrub: 1
        }
      }
    );

    // Bottom Copyright line smooth fade in
    gsap.fromTo('.footer-bottom-bar',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.footer-bottom-bar',
          start: "top 98%",
          scrub: 1
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="footer-section-wrapper">
      <div className="footer-main-content">
        
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-info-col">
          <div className="footer-logo-box">
            {/* నువ్వు పెట్టిన AF Agency లోగో ఇక్కడ వస్తుంది */}
            <div className="brand-logo-circle">
              <span className="logo-text-f">AF</span>
              <span className="logo-sub-text">AD AGENCY</span>
            </div>
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
            <li><a href="#cinecombo">CineCombo</a></li>
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

      {/* Footer Bottom Bar: Copyright & Socials */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">© 2024 AF Ad Agency & Studios. All Rights Reserved.</p>
        <div className="footer-social-links">
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#youtube">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;