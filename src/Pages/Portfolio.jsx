import HeroBackground from "../components/HeroBackground";
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import PortfolioImage from '../assets/images/PortfolioImage.svg'
import BGimage from '../assets/images/BGImage.svg';
import './PortfolioSection.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import CTACards from '../components/CTAcards'

import liminaSeries from '../assets/images/liminaSeries.svg'
import EthirialMotion from '../assets/images/EthirialMotion.svg'
import nexusInitiative from '../assets/images/nexusInitiative.svg'
import SocialPulse from '../assets/images/SocialPulse.svg'
import Velocity from '../assets/images/Velocity.svg'




gsap.registerPlugin(ScrollTrigger);
function Portfolio() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const gridRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

   
    tl.fromTo(subtitleRef.current, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(titleRef.current, 
      { opacity: 0, scale: 0.9, y: 30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      '-=0.4' // మునుపటి యానిమేషన్ పూర్తికాకముందే స్టార్ట్ అవుతుంది
    )
    .fromTo(descriptionRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(buttonsRef.current, // బటన్స్ యానిమేషన్
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
      );

      const cards = gridRef.current.querySelectorAll('.portfolio-card');
    
   gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 60, 
        scale: 0.95 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current, 
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', 
        }
      }
    );


    const el = cardRef.current;
    const content = contentRef.current;

    gsap.fromTo(content, 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.9 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'restart pause resume reverse', 
        }
      }
    );

  }, []);


  const projects = [
    {
      id: 1,
      tag: 'BRAND FILM',
      title: 'The Nexus Initiative',
      img: nexusInitiative,
      gridClass: 'card-tall',
      tagline:'High-octane cinematic brand storytelling and visual production.'
    },
    {
      id: 2,
      tag: 'COMMERCIAL ADVERTISEMENT',
      title: 'Velocity X: Unleashed',
      img: Velocity,
      gridClass: 'card-wide',
      tagline:'High-performance ad campaign for the next generation of hardware.'
    },
    {
      id: 3,
      tag: 'PRODUCT PHOTOGRAPHY',
      title: 'Lumina Series',
      img: liminaSeries,
      gridClass: 'card-standard'
    },
    {
      id: 4,
      tag: 'SOCIAL MEDIA CONTENT',
      title: 'Social Pulse 24',
      img: SocialPulse,
      gridClass: 'card-standard'
    },
    {
      id: 5,
      tag: 'BRAND FILM',
      title: 'Ethereal Motion',
      img: EthirialMotion,
      gridClass: 'card-standard'
    }
  ];
  return (
    <>
    <div 
            className="home-bg-container" 
            style={{ backgroundImage: `url(${BGimage})` }}
          ></div>
      <div>
     
      
     <div className="portfolio-container" ref={containerRef}>
      <div className="portfolio-content">
        <span className="visual-excellence" ref={subtitleRef}>
          VISUAL EXCELLENCE
        </span>
        
        <h1 className="main-title" ref={titleRef}>
          Our Portfolio
        </h1>
        
        <p className="description" ref={descriptionRef}>
          Exploring the intersection of cinematic artistry and precision performance.<br />
          Every frame is designed to engage and inspire, every shot designed to resonate.
        </p>

        {/* బటన్స్ సెక్షన్ */}
        <div className="button-group" ref={buttonsRef}>
          <button className="btn-outline">All Works</button>
          <button className="btn-outline">Commercial Advertisements</button>
          <button className="btn-outline">Brand Films</button>
          <button className="btn-outline">Product Photography</button>
          <button className="btn-outline">Social Media Content</button>

        </div>
      </div>
    </div>
        
     
              

         <div className="grid-section-container">
      <div className="portfolio-grid" ref={gridRef}>
        {projects.map((project) => (
          <div key={project.id} className={`portfolio-card ${project.gridClass}`}>
            <div >
              <img src={project.img} alt={project.title} className="user-image" />
              <div className="card-overlay"></div>
            </div>
            
            <div className="overlay-text">
              <span className="taghead">{project.tag}</span>
              <h1 className="tagline-gradient-text" >{project.title}</h1>
              <p >{project.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div >
    
       <CTACards 
        title=" Ready To Create Your Own"
        spanText="Legacy?"
        description="We specialize in transforming abstract concepts into cinematic realities. 
            Let's build your brand's visual identity together."
        btnText="Start Your Project"
        btnText2="View More Work"
      />
    </div>
     </div>
    </>
  );
}

export default Portfolio;