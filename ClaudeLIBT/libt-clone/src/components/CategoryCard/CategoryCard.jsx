import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ 
  category = {
    id: 1,
    icon: "💼",
    title: "Category Title",
    description: "Category description"
  }
}) => {
  return (
    <div className="subject-category-item-container">
      <button className="subject-category-button">
        <div className="subject-category-content">
          <div className="subject-icon-container">
            {category.icon}
          </div>
          <div className="subject-title-container">
            <h3 className="subject-title">{category.title}</h3>
          </div>
          <div className="subject-description-container">
            <p className="subject-description">
              {category.description}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CategoryCard;