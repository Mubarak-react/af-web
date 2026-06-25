import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutUs.css';
// Ensure this path exactly targets your gradient dark base image asset!
import BGimage from '../assets/images/BGImage.svg'; 
import CTACards from '../components/CTAcards';
import TeamMember from '../assets/images/Team member.svg'
import TeamMember1 from '../assets/images/Team member (1).svg'
import TeamMember2 from '../assets/images/Team member (2).svg'
import TeamMember3 from '../assets/images/Team member (3).svg'
import AboutUSCAPIcon from '../assets/images/AboutUSCAPIcon.svg'
import AboutUSDGIcon from '../assets/images/AboutUSDGIcon.svg'
import AboutUSMTIcon from '../assets/images/AboutUSMTIcon.svg'
import AboutUSCAPImage from '../assets/images/AboutUSCAPImage.svg'
import AboutUSheaderImg from '../assets/images/AboutUSheaderImg.svg'
import AboutUSMTImage from '../assets/images/AboutUSMTImage.svg'
import AboutUSDGImage from '../assets/images/AboutUSDGImage.svg'


gsap.registerPlugin(ScrollTrigger);

function AboutUS() {
  const containerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

useEffect(() => {
    const container = mainContainerRef.current;
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;

    // Existing ref-based animations
    if (leftSide && container) {
      gsap.fromTo(
        leftSide,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    if (rightSide && container) {
      gsap.fromTo(
        rightSide,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    // GSAP Context for selector-based animations
    const ctx = gsap.context(() => {
      // --- YOUR EXISTING ANIMATIONS ---
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-image-wrapper', {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, "-=0.8");

      gsap.utils.toArray('.section-header').forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });

      gsap.from('.advantage-card', {
        scrollTrigger: {
          trigger: '.advantage-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.vision-card', {
        scrollTrigger: {
          trigger: '.vision-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        x: (index) => index === 0 ? -60 : 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.fromTo('.cta-card', 
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-card',
            start: 'top 85%',   
            end: 'bottom 15%',  
            toggleActions: 'play reverse play reverse', 
          }
        }
      );

      gsap.fromTo('.cta-title, .cta-text, .cta-buttons',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cta-card',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // --- NEW ANIMATIONS FOR THE UPLOADED SECTIONS ---
      
      // Visionary Path Animations
      gsap.from('.aboutus-visionary-box', {
        scrollTrigger: {
          trigger: '.aboutus-visionary-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from('.aboutus-visionary-right > *', {
        scrollTrigger: {
          trigger: '.aboutus-visionary-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Collective Intelligence Animations
      gsap.from('.aboutus-collective-left > *', {
        scrollTrigger: {
          trigger: '.aboutus-collective-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      gsap.from('.aboutus-grid-image', {
        scrollTrigger: {
          trigger: '.aboutus-collective-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)'
      });

      // Results/Testimonials Animations
      gsap.from('.aboutus-results-title', {
        scrollTrigger: {
          trigger: '.aboutus-results-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: -30,
        opacity: 0,
        duration: 0.7
      });

      gsap.from('.aboutus-testimonial-card', {
        scrollTrigger: {
          trigger: '.aboutus-results-container',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });

    }, containerRef); // Scope to containerRef

    return () => ctx.revert();
  }, []);

  return (
    <div  ref={containerRef}>
      <div ref={mainContainerRef} style={{ minHeight: '50px', padding: '10px' }}>
        <div ref={leftSideRef}></div>
        <div ref={rightSideRef}></div>
      </div>
      {/* 🔥 MASTER FIX: Pure Absolute Backdrop Asset Layer */}
      <div 
        className="master-gradient-bg" 
        style={{ backgroundImage: `url(${BGimage})` }}
      ></div>

      <main className="content-layer">
        {/* 1. Hero Section */}
       <div className="AboutUSheader-container" ref={containerRef}>
      
      {/* Left Content Side */}
      <div className="AboutUSheader-leftSide" ref={leftSideRef}>
        <span className="AboutUSheader-badge">ESTABLISHED EXCELLENCE</span>
        
        <h1 className="AboutUSheader-title">
          Redefining the <br />
          <span className="AboutUSheader-titleHighlight">Creative Ecosystem.</span>
        </h1>
        
        <p className="AboutUSheader-description">
          AF Ad Agency & Studios is more than a creative agency. We are a
          full-spectrum production house, a strategic digital growth partner,
          and a high-performance training institute.
        </p>
        
        <div className="AboutUSheader-statsContainer">
          <div className="AboutUSheader-statBox">
            <h2 className="AboutUSheader-statNumber">10+</h2>
            <p className="AboutUSheader-statLabel">INDUSTRY YEARS</p>
          </div>
          <div className="AboutUSheader-statBox">
            <h2 className="AboutUSheader-statNumber">500+</h2>
            <p className="AboutUSheader-statLabel">PROJECTS DELIVERED</p>
          </div>
        </div>
      </div>

      {/* Right Image/Studio Preview Side */}
      <div className="AboutUSheader-rightSide" ref={rightSideRef}>
        <div>
          {/* Replace with your actual studio image source */}
          <img 
            src={AboutUSheaderImg}
            alt="Studio Setup" 
            className="AboutUSheader-image" 
          />
        </div>
      </div>

    </div>

    {/* --- SECTION 1: THE VISIONARY PATH --- */}
      <section className="aboutus-visionary-section">
        <div className="aboutus-visionary-box">
          <h2 className="aboutus-visionary-title">
            The Visionary <span className="aboutus-highlight-blue">Path</span>
          </h2>
          <div className="aboutus-line-decorator"></div>
          <p className="aboutus-visionary-text">
            AF Ad Agency & Studios began with a singular observation: the gap between technical mastery and commercial success was widening. Brands had stories but lacked the strategy to scale; aspiring creators had passion but lacked the real-world experience.
          </p>
        </div>
        <div className="aboutus-visionary-right">
          <p className="aboutus-large-text">
            We built AF to bridge that divide. Starting as a specialized production unit, we quickly realized that a great film only works if people see it—and that a great marketing campaign only converts if the content is world-class.
          </p>
          <p className="aboutus-large-text">
            Today, AF stands as a complete creative ecosystem where every pillar supports the other, creating a self-sustaining engine of growth for our clients and our community.
          </p>
          <div className="aboutus-tagline">
            <span>|</span> CRAFTING STORIES. SCALING BRANDS. BUILDING THE FUTURE OF MEDIA.
          </div>
        </div>
      </section>

      
    

        {/* 2. The AF Advantage */}
        <section className="section-padding">
          <h2 className="section-header center">The AF Advantage</h2>
          <p className="section-subheader">Why global brands and ambitious creators choose us.</p>
          <div className="advantage-grid">
            {[
              { title: 'Creative Advertising', desc: 'Artistic expression meeting commercial results.' },
              { title: 'ROI-Focused Marketing', desc: 'Measured growth and revenue driving deployment.' },
              { title: 'Pro Production Quality', desc: 'Industry-standard gear without the overhead.' },
              { title: 'Experienced Team', desc: 'Hybrid collective of filmmakers and strategists.' },
              { title: 'End-to-End Solutions', desc: 'Managing the entire brand lifecycle in-house.' },
              { title: 'Practical Training', desc: 'Curriculum designed by active professionals.' },
              { title: 'Proven Results', desc: 'Scaling startups and established global brands.' },
              { title: 'Real-World Expertise', desc: 'We do it every single day for global clients.' }
            ].map((item, index) => (
              <div className="card advantage-card glass-card" key={index}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: THE COLLECTIVE INTELLIGENCE --- */}
      <section className="aboutus-collective-section">
        <div className="aboutus-collective-left">
          <h2 className="aboutus-collective-title">
            The Collective <br />
            <span className="aboutus-highlight-blue">Intelligence</span>
          </h2>
          <p className="aboutus-collective-text">
            The AF team is a hybrid of specialists united by a common goal: excellence. Our ecosystem thrives on the collaboration between seasoned filmmakers, creative strategists, technical editors, performance marketers, and expert trainers.
          </p>
          <p className="aboutus-collective-text">
            We don't work in silos; we work as a cohesive production unit. Whether we are building a brand strategy or mentoring a student, you are gaining access to a collective decades of industry experience.
          </p>
          <button className="aboutus-btn">Meet Our Minds</button>
        </div>

        <div className="aboutus-collective-grid">
          {/* Top-Left Big Image / Leader */}
          <div className="aboutus-grid-image">
            <img src={TeamMember}  alt="Leader" />
          </div>
          {/* Top-Right Camera Shot */}
          <div className="aboutus-grid-image">
            <img src={TeamMember1}  alt="Production" />
          </div>
          {/* Bottom-Left Editing Studio */}
          <div className="aboutus-grid-image">
            <img src={TeamMember2} alt="Studio" />
          </div>
          {/* Bottom-Right Analytics/Growth */}
          <div className="aboutus-grid-image">
            <img src={TeamMember3}  alt="Growth" />
          </div>
        </div>
      </section>

        {/* 3. What We Do */}
        <section className="section-padding">
          <h2 className="section-header center">What We Do</h2>
          <div className="services-grid">
            <div className="card service-card glass-card">
              <img  src={AboutUSCAPIcon}/>
              <h3>Commercial Ad Production</h3>
              <p>We don't just capture images; we engineer visual influence. High-fidelity content that commands attention using cinema-grade equipment and narrative depth.</p>
             <img className='AboutUSWhatWeDoImages' src={AboutUSCAPImage}/>
            </div>
            <div className="card service-card glass-card">
                 <img  src={AboutUSDGIcon}/>
              <h3>Digital Growth & Performance</h3>
              <p>Precision SEO, strategic Meta and Google Ads, and high-impact social campaigns. We transform digital presence into market dominance through ROI-focused strategies.</p>
            <img className='AboutUSWhatWeDoImages' src={AboutUSDGImage}/>
            </div>
            <div className="card service-card glass-card">
                 <img  src={AboutUSMTIcon}/>
              <h3>Media Training & Education</h3>
              <p>Specialized tracks in Cinematography and Editing. Hands-on practicals and real client projects turning enthusiasts into industry-ready experts.</p>
           <img  className='AboutUSWhatWeDoImages' src={AboutUSMTImage}/>
            </div>
          </div>
        </section>

        {/* 4. Mission & Vision */}
        <section className="section-padding">
          <div className="vision-grid">
            <div className="card vision-card glass-card">
              <h3>Mission Statement</h3>
              <p>To empower businesses through innovative commercial storytelling and strategic digital marketing, while developing the future of media through immersive, hands-on professional training and mentorship.</p>
            </div>
            <div className="card vision-card glass-card">
              <h3>Vision Statement</h3>
              <p>To establish AF Ad Agency & Studios as Hyderabad's strongest and most influential creative ecosystem—a hub where innovation meets execution, and where the world's most compelling brand stories are born.</p>
            </div>
          </div>
        </section>


        {/* --- SECTION 3: RESULTS THAT SPEAK --- */}
      <section className="aboutus-results-section">
        <h2 className="aboutus-results-title">
          Results That <span className="aboutus-highlight-blue">Speak</span>
        </h2>

        <div className="aboutus-results-container">
          {/* Client Success Column */}
          <div className="aboutus-results-column">
            <h3 className="aboutus-column-heading">
              <span className="aboutus-icon">💼</span> Client Success
            </h3>
            
            <div className="aboutus-testimonial-card aboutus-card-purple">
              <p className="aboutus-quote">
                "AF Ad Agency transformed our digital presence. Within three months of their Meta Ads and SEO strategy, our qualified leads increased by 40%."
              </p>
              <p className="aboutus-author">— Founder, Premium Interiors</p>
              <span className="aboutus-quote-bg">”</span>
            </div>

            <div className="aboutus-testimonial-card aboutus-card-purple">
              <p className="aboutus-quote">
                "Working with AF on our brand film was a seamless experience. They understood our vision immediately and delivered a cinematic ad that truly represented our craftsmanship."
              </p>
              <p className="aboutus-author">— Marketing Director, Luxury Jewelry</p>
            </div>
          </div>

          {/* Student Success Column */}
          <div className="aboutus-results-column">
            <h3 className="aboutus-column-heading">
              <span className="aboutus-icon">🎓</span> Student Success
            </h3>

            <div className="aboutus-testimonial-card aboutus-card-teal">
              <p className="aboutus-quote">
                "The practical training at AF is life-changing. I went from knowing nothing about a camera to handling ARRI and RED systems with confidence on real client sets."
              </p>
              <p className="aboutus-author">— Sandeep K., Cinematography Graduate</p>
            </div>

            <div className="aboutus-testimonial-card aboutus-card-teal">
              <p className="aboutus-quote">
                "Unlike other institutes, AF gave me the chance to work on actual agency briefs. The mentorship gave me the edge I needed."
              </p>
              <p className="aboutus-author">— Ananya R., Video Editing Alumni</p>
            </div>
          </div>
        </div>
      </section>

        {/* 5. Call To Action Footer Frame Layout */}
   

        <CTACards 
        title="The Intersection of"
        spanText="Excellence"
        description=" AF Ad Agency & Studios is where the line between learning and leading disappears. 
              Join our ecosystem—where every story is told with precision, and every creator is 
              equipped for greatness."
        btnText="Apply Now"
        btnText2="Talk to a Mentor"
      />
      </main>
    </div>
  );
}

export default AboutUS;