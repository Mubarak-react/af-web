import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCourses.css';

const TrainingCard = ({ image, title, description, path }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (path) {
      navigate(path);
    } else {
      console.error("Path missing for:", title); // Path missing unte console lo warning vasthundi
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Card component click handler ni trigger avvakunda chesthundi
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="TrainingCourses__card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="TrainingCourses__image-wrapper">
        <img src={image} alt={title}  className="TrainingCourses__image"/>
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