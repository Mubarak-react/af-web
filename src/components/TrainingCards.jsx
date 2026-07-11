import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCourses.css';

// 2. Ikkada 'isActive' prop ni collect చేసుకుంటున్నాం
const TrainingCard = ({ image, title, description, path, isActive }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (path) {
      navigate(path);
    } else {
      console.error("Path missing for:", title);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    if (path) {
      navigate(path);
    }
  };

  return (
    // 3. Dynamic active class mapping ikkada chesam
    <div 
      className={`TrainingCourses__card ${isActive ? 'active-card' : ''}`} 
      onClick={handleCardClick} 
      style={{ cursor: 'pointer' }}
    >
      <div className="TrainingCourses__image-wrapper">
        <img src={image} alt={title} className="TrainingCourses__image"/>
      </div>
      <div className="TrainingCourses__content">
        <h3 className="TrainingCourses__title">{title}</h3>
        <p className="TrainingCourses__description">{description}</p>
        
        <button className="TrainingCourses__button" onClick={handleButtonClick}>
          View Module &gt;
        </button>
      </div>
    </div>
  );
};

export default TrainingCard;