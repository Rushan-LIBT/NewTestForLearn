import React, { useState } from 'react';
import './FeelingLostSection.css';
import CategoryCard from '../CategoryCard/CategoryCard';

const FeelingLostSection = ({ 
  title = "Feeling a bit lost?",
  description = "Take a look at our course offerings and find the perfect starting point for your educational journey.",
  categories = [
    {
      id: 1,
      icon: "💼",
      title: "Business and Management",
      description: "Develop leadership skills and business acumen"
    },
    {
      id: 2,
      icon: "💻",
      title: "Computer Science and IT",
      description: "Master technology and programming skills"
    },
    {
      id: 3,
      icon: "👥",
      title: "Human Resources",
      description: "Learn people management and organizational skills"
    },
    {
      id: 4,
      icon: "⚖️",
      title: "Law",
      description: "Understand legal principles and justice systems"
    }
  ],
  buttons = {
    primary: "View All Courses",
    secondary: "Speak to an Advisor"
  }
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Using && operator - Show only first 4 categories initially
  const displayedCategories = showAllCategories ? categories : categories.slice(0, 4);

  return (
    <section className="feeling-lost-main-section">
      <div className="feeling-lost-container">
        
        {/* Section Header */}
        <div className="feeling-lost-header-section">
          <div className="feeling-lost-title-container">
            <h2 className="feeling-lost-title">
              {title}
            </h2>
          </div>
          
          <div className="feeling-lost-description-container">
            <p className="feeling-lost-description">
              {description}
            </p>
          </div>
        </div>

        {/* Subject Categories Section */}
        <div className="subject-categories-section">
          <div className="subject-categories-container">
            
            {/* Using && operator - Only show categories if they exist */}
            {displayedCategories && displayedCategories.map(category => (
              <CategoryCard 
                key={category.id} 
                category={category}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}

          </div>

          {/* Using && operator - Only show "Show More" button if there are more than 4 categories */}
          {categories.length > 4 && (
            <div className="show-more-section">
              <button 
                className="show-more-button"
                onClick={() => setShowAllCategories(!showAllCategories)}
              >
                {/* Using ternary operator - Show different text based on state */}
                {showAllCategories ? 'Show Less Categories' : `Show ${categories.length - 4} More Categories`}
              </button>
            </div>
          )}
        </div>

        {/* Using && operator - Only show selected category details if a category is selected */}
        {selectedCategory && (
          <div className="selected-category-info">
            <p>You selected category ID: {selectedCategory}</p>
            <button onClick={() => setSelectedCategory(null)}>Clear Selection</button>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="feeling-lost-cta-section">
          <div className="feeling-lost-cta-container">
            {/* Using ternary operator - Change button text based on selection */}
            <button className="view-all-courses-button">
              {selectedCategory ? 'View Courses in This Area' : buttons.primary}
            </button>
            
            <button className="speak-advisor-button">
              {buttons.secondary}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeelingLostSection;