import React from 'react';
import './InfoCard.css';

const InfoCard = ({ 
  info = {
    icon: "🚀",
    title: "Info Title",
    description: "Info description"
  }
}) => {
  return (
    <div className="info-card">
      <div className="info-icon">{info.icon}</div>
      <h4 className="info-title">{info.title}</h4>
      <p className="info-description">{info.description}</p>
    </div>
  );
};

export default InfoCard;