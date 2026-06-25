import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CtaCard.css'; 

gsap.registerPlugin(ScrollTrigger);

const CTACards = ({ title, spanText, description, btnText, phoneNumber, btnText2, description2 }) => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const element = ctaRef.current;
    
    const anim = gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 60 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: "top 85%", 
          toggleActions: "play none none reverse", 
        }
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="cta-slide-section">
      <div className="cta-wrapper-box cta-glass-card" ref={ctaRef}>
        <h2 className="cta-headline-title">
          {title} <span>{spanText}</span>
        </h2>
        
        <p className="cta-sub-message">
          {description}
        </p>
        
        <div className="cta-actions-row">
          {/* Primary Strategy Call Button linked to phone */}
          <a href={`tel:${phoneNumber}`} className="cta-btn-primary">
            {btnText}
          </a>
          
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`} className="cta-phone-link">
              <div className="cta-phone-icon-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span>{phoneNumber}</span>
            </a>
          )}

          {btnText2 && (
            <button className="cta-phone-link cta-secondary-btn">
              {btnText2}
            </button>
          )}
        </div>

        {description2 && <p className='cta-sub-message2'>{description2}</p>}
      </div>
    </section>
  );
};

export default CTACards;