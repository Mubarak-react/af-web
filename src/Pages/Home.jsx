import React, { useEffect, useRef, useState } from 'react';import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './home.css';
import BGimage from '../assets/images/BGImage.svg';
import Footer from '../footer/Footer'
import HomeImage from '../assets/images/homepageimage.svg'
import metaadsmanagement from '../assets/images/meta ads management.svg'
import CommercialAdfilmmaking from '../assets/images/Commercial Ad film making.svg'
import SEOdigitalmarketing from '../assets/images/SEO digital marketing.svg'
import DroneTraining from '../assets/images/Drone Training.svg'
import Photography2 from '../assets/images/Photography2.svg'
import CTACards from '../components/CTAcards' 
import AgencyImage from '../assets/images/Agency Workspace.svg'
import ProfessionalCameraTraining from '../assets/images/Professional Camera Training.svg';
import AboutUSheaderImg from '../assets/images/AboutUSheaderImg.svg'
import commercialADImage from '../assets/images/commercialADImage.png'
import digitalMarketing from '../assets/images/digital-marketing.png'
import metaAd from '../assets/images/metaAd.png'
import CEOImage from '../assets/images/CEOImg.PNG'


// Mock placeholders for missing images—replace these with your actual image assets
// import PhotographyImg from '../assets/images/photography.jpg'; 
 import CinematographyImg from '../assets/images/cinematography.svg';
import VideoEditingImg from '../assets/images/Video Editing Training.svg';
import FeaturedCoursesCards from '../components/FeaturedCoursesCards';
 
// import ProfileImg from '../assets/images/profile.jpg';
// import RobotImg from '../assets/images/robot.png';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroTextRef = useRef(null);
  const heroImgRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const heroTitleRef = useRef(null);
  const navigate = useNavigate();
  
  // New Section References
  const headingSectionRef = useRef(null);
  const aboutImgRef = useRef(null);
  const aboutTextRef = useRef(null);
  const cineComboRef = useRef(null);
  const whyChooseRef = useRef(null);
  
  // --- Reference for the new Media Training Programs section ---
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const [activeFaq, setActiveFaq] = useState(null);

  const titles = [
    <>Top Photography, Cinematography, Video Editing, Color Grading & Drone Flying Training Institute in <span className="aboutus-highlight-blue">Hyderabad</span></>,
    <>Top Digital Marketing, Meta Ads Management & Commercial Video Production Agency in <span className="aboutus-highlight-blue">Hyderabad</span></>
  ];

  const faqData = [
    {
      question: "Why choose AF Ad Agency & Studios for commercial advertising?",
      answer: "We combine premium cinematic video production with data-driven marketing strategies. Our focus isn't just on making things look good; we build campaigns designed to increase brand visibility, engage your target audience, and drive measurable sales."
    },
    {
      question: "What digital marketing services do you offer?",
      answer: "We are a full-service growth agency. Our core expertise includes high-converting Meta Ads (Facebook & Instagram), precise Google Ads management, technical SEO services, and comprehensive performance marketing tailored to scale your business."
    },
    {
      question: "Is the CineCombo media training program suitable for beginners?",
      answer: "Absolutely. The CineCombo bundle is designed with 100% practical, hands-on learning. It takes you step-by-step through professional photography, cinematography, and video editing, making it perfect for both complete beginners and aspiring professionals"
    },
    {
          question:"Do you provide digital marketing and ad services for small businesses?",
          answer:"Yes! We partner with businesses of all sizes. Our performance marketing and video production strategies are highly scalable, meaning we focus on maximizing your specific budget to deliver the best possible Return on Ad Spend (ROAS)."
    },
     {
          question:"Do you provide career guidance after the media training programs?",
          answer:"Yes. Our premium training bundles include live client projects, professional portfolio building, and dedicated industry mentorship to give you a competitive edge when launching your creative career."
    },
    {
          question:"How long does it take to produce a commercial ad video?",
          answer:"Timelines depend on the scale and complexity of the shoot. However, our in-house team of expert filmmakers and editors ensures a streamlined, efficient production process to deliver broadcast-quality videos without unnecessary delays."
    }
  ];

  const handleFaqToggle = (index) => {
    const isOpening = activeFaq !== index;
    const currentAnswer = document.querySelector(`#faq-ans-${index}`);
    const currentArrow = document.querySelector(`#faq-arrow-${index}`);

    // If another card is already open, close it smoothly first
    if (activeFaq !== null && activeFaq !== index) {
      const prevAnswer = document.querySelector(`#faq-ans-${activeFaq}`);
      const prevArrow = document.querySelector(`#faq-arrow-${activeFaq}`);
      gsap.to(prevAnswer, { height: 0, opacity: 0, marginTop: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(prevArrow, { rotate: 0, duration: 0.3 });
    }

    // Dynamic GSAP Height expansion/collapse logic
    if (isOpening) {
      setActiveFaq(index);
      gsap.fromTo(currentAnswer,
        { height: 0, opacity: 0, marginTop: 0 },
        { height: "auto", opacity: 1, marginTop: 12, duration: 0.4, ease: "power2.out" }
      );
      gsap.to(currentArrow, { rotate: 180, duration: 0.4 });
    } else {
      setActiveFaq(null);
      gsap.to(currentAnswer, { height: 0, opacity: 0, marginTop: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(currentArrow, { rotate: 0, duration: 0.3 });
    }
  };

  useEffect(() => {

    const interval = setInterval(() => {
      // యానిమేషన్ స్టార్ట్ అయ్యే ముందు పాత టెక్స్ట్‌ని పైకి పంపించి ఫేడ్ అవుట్ చేస్తాం
      gsap.to(heroTitleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // టెక్స్ట్ మారిన తర్వాత కింద నుంచి పైకి స్మూత్‌గా స్లైడ్ అవుతూ వస్తుంది (Fade In)
          setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
          gsap.fromTo(heroTitleRef.current, 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
          );
        }
      });
    }, 15000); // 3000ms = 3 Seconds

   
    // 1. Initial Load Flow (Slide 1)
    const tl = gsap.timeline();
    tl.fromTo(heroTextRef.current.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
    tl.fromTo(heroImgRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
      "-=0.5"
    );

    // 2. Slide 2: Analytics Stats Section Triggers
    gsap.fromTo(statsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // 3. Slide 3: Services Section Grid Trigger Setup
    gsap.fromTo(servicesRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // 4. Slide 4: Leading Ad Text Animation
    gsap.fromTo(headingSectionRef.current.children,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingSectionRef.current,
          start: "top 75%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // 5. Slide 5: Profile Team & Vision Section Animation
    gsap.fromTo(aboutImgRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutImgRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    gsap.fromTo(aboutTextRef.current.children,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // --- 6. Slide 6: Media Training Programs Scroll Animation ---
   

    if (cineComboRef.current) {
      const leftElements = cineComboRef.current.querySelector('.cinecombo-left').children;
      const rightCards = cineComboRef.current.querySelectorAll('.combo-stat-card');

      // Left column stagger entry
      gsap.fromTo(leftElements,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cineComboRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Right grid cards scale-in stagger entry
      gsap.fromTo(rightCards,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cineComboRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }

    if (whyChooseRef.current) {
      gsap.fromTo(whyChooseRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }

    if (faqRef.current) {
      gsap.fromTo(faqRef.current.querySelectorAll('.faq-item-container'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }
if (ctaRef.current) {
      gsap.fromTo(ctaRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Absolute Fixed Background Layout */}
      <div 
        className="home-bg-container" 
        style={{ backgroundImage: `url(${BGimage})` }}
      ></div>

      <main>
        {/* Slide 1: Hero Container */}
        {/* <section className="slide-section">
          <div className="hero-container">
            <div className="hero-text-content" ref={heroTextRef}>
              <span className="hero-tagline">Welcome to AF Future Tech & Staffing</span>
              <h1 className="hero-title" ref={heroTitleRef}>
                {titles[textIndex]}
              </h1>
              <p className="hero-desc">
                From high-end commercial ad filmmaking to data-driven performance marketing, SEO,
                 and Google Ads, we help Hyderabad businesses brands dominate their market and 
                 drive real business growth.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">View Our Portfolio</button>
                <button  className="home-call-btn">
                  <a href="tel:+91 7661813635">
    Contact Us
  </a>
                </button>
                
              </div>
            </div>
            <div className="home-hero-image-wrapper" ref={heroImgRef}> 
              <img src={HomeImage}  alt="AF Tech Analytics" />
            
            </div>
          </div>
        </section> */}

          <section className="home-hero-page-section">
  <div className="split-hero-layout">
    
    {/* Left Content Column */}
    <div className="hero-content-left" ref={heroTextRef}>
      <span className="hero-tagline">Welcome to AF Ad agency & studios</span>
      <h1 className='home-heading'  ref={heroTitleRef}>
        {titles[textIndex]}
      </h1>

     

      <div className="hero-buttons">
        <button className="btn-primary">View Our Portfolio</button>
        <button className="home-call-btn">
          <a href="tel:+91 7661813635">Contact Us</a>
        </button>
      </div>

      
    </div>

    

    {/* Right Media Display Frame */}
    <div className="hero-media-right hero-load-node" ref={heroImgRef}>
      <div className="cinematic-preview-frame">
        <img className='AboutUSheader-image' src={AboutUSheaderImg} alt="Cinematographer operating premium cinema camera rig" />
      </div>
    </div>

  </div>
</section>

      
     <div className="hero-glass-card-info hero-load-node">
  <p className="hero-paragraph-desc-glass">
    <strong>AF Studios & Ad Agency</strong> also offers industry-focused <strong>photography, cinematography, drone filmmaking, gimbal operation, filmmaking, video editing, and professional color grading training</strong> designed for aspiring weddings, film makers, creators and media professionals. Our hands-on courses combine practical learning with <strong>real-world projects</strong>, helping students <strong>master camera techniques, cinematic storytelling, drone cinematography, post-production workflows, DaVinci Resolve and Adobe Premiere Pro.</strong> Whether you're starting a creative career or upgrading your skills, our professional media training equips you with the expertise needed for opportunities in <strong>Photography, Filmmaking, Content Creation</strong> and <strong>Digital Media</strong>.
  </p>
</div>

<div className="hero-glass-card-info hero-load-node">
  <p className="hero-paragraph-desc-glass">
    <strong>AF Studios & Ad Agency</strong> is a leading creative agency specializing in <strong>commercial ad film production</strong>, <strong>corporate video production</strong>, professional photography, videography, and video editing services, <strong>SEO & Meta Ad services</strong>. We work with businesses in healthcare, education, real estate, architecture, interior design, retail, lifestyle, automobile, jewellery, fashion, product-based, and service-based industries to create <strong>impactful brand films</strong>, commercial advertisements, product shoots, promotional videos, and <strong>customer testimonials</strong> that increase brand visibility, engage audiences, and accelerate <strong>business growth</strong>.
  </p>
</div>

        {/* Slide 2: Status Counters */}
        <section className="slide-section">
          <div className="stats-container" ref={statsRef}>
            <div className="stat-item"><h2>7+</h2><p>Years Experience</p></div>
            <div className="stat-item"><h2>500+</h2><p>Projects Completed</p></div>
            <div className="stat-item"><h2>5+</h2><p>GLOBAL PRESENCE</p></div>
            <div className="stat-item"><h2>1000+</h2><p>Students Trained </p></div>
          </div>
        </section>

        {/* Slide 3: Our Services */}
       <section className="Our-Services-cards services-section">
  <h2 className="services-title">Our <span>Services</span> </h2>
  <div className="services-grid" ref={servicesRef}>
    
    {/* Commercial Ad Production */}
    <div onClick={() => navigate('/CommercialAd')} className="our-ser-card glass-card">
      <div className="image-wrapper">
        <img className='commercial-image-alignment' src={commercialADImage} alt="Commercial Ad"/>
      </div>
      <h3>Commercial Ad Production</h3>
      <p>Cinematic commercial videos designed to engage audiences and generate leads.</p>
      <button className='our-services-button' onClick={() => navigate('/CommercialAd')}>Know More <span className="arrow">&rarr;</span></button>
    </div>

    {/* Digital Marketing */}
    <div onClick={() => navigate('/DigitalMarketing')} className="our-ser-card glass-card">
      <div className="image-wrapper">
        <img className='commercial-image-alignment' src={digitalMarketing} alt="Digital Marketing"/>
      </div>
      <h3>Digital Marketing</h3>
      <p>Results-driven SEO, Social Media Marketing, and Content Marketing help businesses achieve sustainable growth.</p>
      <button className='our-services-button' onClick={() => navigate('/DigitalMarketing')}>Know More <span className="arrow">&rarr;</span></button>
    </div>

    {/* Meta Ads Management */}
    <div onClick={() => navigate('/MetaAd')} className='our-ser-card'>
      <div className='meta-ad-container'>
        <img className='meta-ads-image' src={metaAd} alt="Meta Ads"/>
      </div>
      <h3>Meta Ads Management</h3>
      <p>Strategic Facebook and Instagram Ads focusing on audience targeting, lead generation, and maximizing ROI.</p>
      <button className='our-services-button' onClick={() => navigate('/MetaAd')}>Know More <span className="arrow">&rarr;</span></button>
    </div>
        
  </div>

    <FeaturedCoursesCards/>
  
</section>

       
            

            
        <section className="slide-section combo-section">
          <div className="combo-container" ref={cineComboRef}>
            
            {/* Left Content Column */}
            <div className="cinecombo-left">
              <span className="combo-premium-tag">Join Now parallel fasttrack cine combo (pfc batch)</span>
              <h2 className="combo-title">CINECOMBO <span>TRAINING</span></h2>
              
              <div className="combo-features-list">
                <div className="feature-item">
                  <span className="check-icon">✓</span> <p>Photography</p>
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> <p>Photoshop (Complementary)</p>
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> <p>Cinematography</p>
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> <p>Video Editing & Color Grading</p>
                </div>
                
                 <div className="feature-item">
                  <span className="check-icon">✓</span> <p>Gimbal</p>
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> <p>Drone (Complementary)</p>
                </div>
              </div>
              
              <button className="btn-enroll-now">Enroll Now</button>
            </div>

            {/* Right Glassmorphism Cards Matrix */}
            <div className="cinecombo-right-grid">
              <div className="combo-stat-card">
               
                <p>PROFESSIONAL CORPORATE ENVIRONMENTAL</p>
              </div>
              <div className="combo-stat-card glass-card">
                
                <p>PORTFOLIO BUILDING FOR CAREER GROWTH</p>
              </div>
              <div className="combo-stat-card glass-card">
                
                <p>OFFICIAL CERTIFICATION</p>
              </div>
              <div className="combo-stat-card glass-card">
                
                <p>NETWORKING WITH INDUSTRY EXPERTS</p>
              </div>
            </div>

          </div>
        </section>

        
        <section className="slide-section why-section">
          <div className="why-wrapper" ref={whyChooseRef}>
            <h2 className="why-main-title">Why Choose AF Ad <span>Agency & Studios</span></h2>
            
            <div className="why-grid">
              <div className="why-card">
                <h4 className="why-purple-title">Creative Advertising</h4>
                <p>We create advertisements that capture attention, engage audiences, and drive customer action.</p>
              </div>

              <div className="why-card">
                <h4 className="why-purple-title">ROI-Focused</h4>
                <p>Every campaign is designed to maximize visibility, leads, conversions, and return on investment.</p>
              </div>

              <div className="why-card">
                <h4 className="why-purple-title">Professional Quality</h4>
                <p> We deliver premium, High-end visual output every single time</p>
              </div>

              <div className="why-card">
                <h4 className="why-purple-title">Expert Team</h4>
                <p>Skilled marketers, filmmakers, and editors working together for your business growth.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Slide 4: Central Leading Text Layout */}
        <section>
          <div className="heading-only-section" ref={headingSectionRef}>
            <h2 className="leading-headline">
           <span>India's</span> Creative Hub for Advertising, Digital Marketing & Filmmaking Training 
            </h2>
            {/* <p className="sub-brand-desc">
              AF Ad Agency & Studios is a full-service Commercial Advertising Agency, Digital Marketing Company, 
              Video Production Studio, and Media Training Institute dedicated to helping businesses grow through innovative branding.
            </p> */}
          </div>
        </section>

        {/* Slide 5: Profile Info & Vision Mission Layout */}
        <section className="slide-section">
          <div className="about-container">
            <div className="about-image-wrapper" ref={aboutImgRef}>
  <img className="profile-img" src={CEOImage} alt="Executive Profile" />
  
  {/* Gradient Overlay and Text */}
  <div className="image-overlay">
    <div className="founder-info">
      <h3>Shaik Afroz</h3>
      <p>CEO & Director</p> {/* కావాలంటే ఈ లైన్ ఉంచుకోవచ్చు లేదా డిలీట్ చేయొచ్చు */}
    </div>
  </div>
</div>
            
            
            <div className="about-text-content" ref={aboutTextRef}>
          
              
              
              <div className="vision-mission-grid">
                <div className="vision-box">
                  <h4>Our Mission</h4>
                  <p>
                    Our mission is to help businesses grow through creative advertising, professional photography, cinematic video production, branding, and result-driven digital marketing while providing affordable, industry-focused filmmaking training that empowers aspiring creators with practical skills, real-world experience, and career-ready education</p>
                </div>
                <div className="vision-box">
                  <h4>Our Vision</h4>
                  <p>To build AF Studios into a globally recognized advertising agency, digital marketing company, and filmmaking institute, delivering world-class creative solutions for leading brands while making professional filmmaking education affordable and accessible for aspiring creators across India.</p>
                </div>
              </div>
              <div className="hero-glass-card-info">
          <h1 style={{color: '#a855f7'}} >Founder's Message</h1>
  <p className="hero-paragraph-desc-glass">
    Success isn't defined by where you start-it's defined by the vision you pursue and the consistency you bring every day. I built AF Studios from the ground up with the belief that creativity can change lives. My goal is not only to create award-winning films and commercials for global brands but also to inspire and train thousands of future filmmakers by making professional filmmaking education accessible and affordable for everyone.
  </p>
</div>
            </div>
          </div>
        </section>
        

        {/* --- Added Slide 6: Media Training Programs --- */}
      
 
      


        <section className="slide-section faq-section">
          <div className="faq-wrapper" ref={faqRef}>
            <h2 className="faq-main-title">Frequently Asked <span>Questions</span></h2>
            
            <div className="faq-list-container">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item-container glass-card ${activeFaq === index ? 'active-item' : ''}`}
                  onClick={() => handleFaqToggle(index)}
                >
                  <div className="faq-header-row">
                    <h3 className="faq-question-text">{item.question}</h3>
                    <div className="faq-icon-wrapper" id={`faq-arrow-${index}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Dynamic Target Box for GSAP Animation */}
                  <div className="faq-answer-block" id={`faq-ans-${index}`}>
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        

      <CTACards 
        title="Ready To Grow Your"
        spanText="Brand?"
        description="Whether you need Commercial Advertising Services, Digital Marketing Solutions, or Professional Media Training, we are ready to help you achieve your goals."
        btnText="Book Strategy Call"
        phoneNumber="7661813635"
      />

      
   
   <Footer />

      </main>
        
    </>
  );
}

export default Home;