import React from 'react';
import './RestSpreadSection.css';
import InfoCard from '../InfoCard/InfoCard';

const RestSpreadSection = ({ 
  title,
  subtitle,
  primaryFeature,
  additionalInfo,
  ...restProps // REST operator - collects remaining props
}) => {
  
  // Spread operator examples within the component
  const defaultFeatures = ['Interactive Learning', 'Expert Support', 'Flexible Schedule'];
  const allFeatures = [...defaultFeatures, ...(restProps.extraFeatures || [])]; // SPREAD operator
  
  const defaultStats = { students: 10000, courses: 50, satisfaction: 4.8 };
  const combinedStats = { ...defaultStats, ...restProps.stats }; // SPREAD operator
  
  // Destructuring with rest for handling dynamic props
  const { backgroundColor, textColor, ...remainingStyles } = restProps.styles || {};
  
  // Function using rest parameters
  const combineMessages = (mainMessage, ...messages) => {
    return [mainMessage, ...messages].join(' • ');
  };

  return (
    <section 
      className="rest-spread-section"
      style={{ 
        backgroundColor: backgroundColor || '#f8fafc',
        color: textColor || '#1a365d',
        ...remainingStyles // SPREAD operator for additional styles
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Primary Feature Highlight */}
        <div className="primary-feature-card">
          <div className="feature-content">
            <h3 className="feature-title">{primaryFeature?.title}</h3>
            <p className="feature-description">{primaryFeature?.description}</p>
            
            {/* Display combined features using spread */}
            <div className="features-list">
              {allFeatures.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Using spread operator */}
        <div className="stats-grid">
          {Object.entries(combinedStats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <div className="stat-value">{typeof value === 'number' ? value.toLocaleString() : value}</div>
              <div className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        {additionalInfo && additionalInfo.length > 0 && (
          <div className="info-cards-grid">
            {additionalInfo.map((info, index) => (
              <InfoCard key={index} info={info} />
            ))}
          </div>
        )}

        {/* Dynamic Messages using rest parameters */}
        <div className="dynamic-messages">
          <p className="combined-message">
            {combineMessages(
              restProps.mainMessage || 'Transform your future',
              ...(restProps.subMessages || ['Start today', 'Learn at your pace', 'Achieve your goals'])
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-primary">
            {restProps.primaryButton || 'Get Started'}
          </button>
          <button className="btn-secondary">
            {restProps.secondaryButton || 'Learn More'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default RestSpreadSection;