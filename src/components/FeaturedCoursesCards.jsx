import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturedCourses.css'

import TrainingCard from './TrainingCards';

// Nee images paths ikkada pettko
import Photography2 from '../assets/images/Photography2.svg';
import CinematographyImg from '../assets/images/cinematography.svg';
import VideoEditingImg from '../assets/images/Video Editing Training.svg';
import DroneTraining from '../assets/images/Drone Training.svg';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCoursesCards = () => {
  const trainingGridRef = useRef(null);

  // 2. Data antha oka simple list (Array) laga ikkada dachaam
  const data = [
    { id: 1, img: Photography2, title: "Photography", desc: "Commercial, product, and portrait photography techniques.", path:'/Photography' },
    { id: 2, img: CinematographyImg, title: "Cinematography", desc: "Advanced camera operation and cinematic lighting workflows." , path:'/Cinimatography' },
    { id: 3, img: VideoEditingImg, title: "Video Editing", desc: "Color grading, motion graphics, and post-production skills.", path:'/VideoEditing'  },
    { id: 4, img: DroneTraining, title: "Gimbal & Drone", desc: "Aerial cinematography and advanced camera stabilization.", path:'/GimbalDrone'  }
  ];

 useEffect(() => {
    if (!trainingGridRef.current) return;
    gsap.fromTo(trainingGridRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: trainingGridRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, []);

  return (
    <section className="slide-section training-section">
      <div className="training-wrapper">
        
        <div className="training-header">
          <h2 className="training-main-title">Media Training <span>Programs</span></h2>
          <p className="training-sub-desc">Master industry-standard tools...</p>
        </div>

        {/* 3. Ikkada .map() use chesi reusable card ni 4 sarlu dynamic ga loop chesthunnam */}
        <div className="TrainingCourses__container" ref={trainingGridRef}>
          {data.map((item) => (
            <TrainingCard 
              key={item.id} 
              image={item.img} 
              title={item.title} 
              description={item.desc} 
              path={item.path} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCoursesCards;



