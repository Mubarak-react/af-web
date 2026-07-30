import React, { useRef, useEffect } from 'react';
import {  useLocation } from 'react-router-dom'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturedCourses.css';

// 1. Ee import already undi kabatti kinda kothaga declare cheyakudadhu
import TrainingCard from './TrainingCards';

import Photography2 from '../assets/images/Photography2.svg';
import CinematographyImg from '../assets/images/cinematography.svg';
import VideoEditingImg from '../assets/images/Video Editing Training.svg';
import DroneTraining from '../assets/images/Drone Training.svg';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCoursesCards = () => {
  const trainingGridRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation(); 

  const data = [
    { id: 1, img: Photography2, title: "Photography", desc: "Commercial, product and portrait photography techniques.", path: '/Photography' },
    { id: 2, img: CinematographyImg, title: "Cinematography", desc: "Advanced camera operation and cinematic lighting workflows.", path: '/Cinimatography' },
    { id: 3, img: VideoEditingImg, title: "Video Editing", desc: "Color grading, motion graphics and post-production skills.", path: '/VideoEditing' },
    { id: 4, img: DroneTraining, title: "Gimbal & Drone", desc: "Aerial cinematography and advanced camera stabilization.", path: '/GimbalDrone' }
  ];

  useEffect(() => {
    if (!trainingGridRef.current || !headerRef.current) return;

    // Set 3D Perspective Context on layout wrappers
    gsap.set(headerRef.current, { transformPerspective: 1000 });
    gsap.set(trainingGridRef.current, { transformPerspective: 1200 });

    // 1. Header Area 3D Perspective Lift Animation
    gsap.fromTo(headerRef.current.children,
      { opacity: 0, y: 50, rotationX: -25, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // 2. Training Cards Matrix 3D Flip Cascade Entry Animation
    gsap.fromTo(trainingGridRef.current.children,
      { opacity: 0, y: 120, rotationX: -55, scale: 0.88, z: -150 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        z: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: trainingGridRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, []);

  return (
    <section className="slide-section training-section">
      <div className="training-wrapper">
        
        <div className="training-header" ref={headerRef}>
          <h2 className="training-main-title">Hands-On <span>Photography & Filmmaking</span> Courses </h2>
          <p className="training-sub-desc">AF Studios offers professional training in Photography, Cinematography, Video Editing, Color Grading, Drone Operation, Gimbal Filmmaking and Content Creation. Learn through practical sessions with industry-standard equipment and build a portfolio for your creative career.</p>
        </div>

        <div className="TrainingCourses__container" ref={trainingGridRef}>
          {data.map((item) => {
            const isActive = location.pathname.toLowerCase() === item.path.toLowerCase();
            return (
              <TrainingCard 
                key={item.id} 
                image={item.img} 
                title={item.title} 
                description={item.desc} 
                path={item.path} 
                isActive={isActive} // Prop pass chesthunnam
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCoursesCards;