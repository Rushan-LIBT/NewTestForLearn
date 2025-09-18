import React from 'react';
import { Clock, Users, Award } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ course = {
    id: 1,
    title: 'Course Title',
    university: 'University Name',
    duration: 'Duration',
    students: 'Students Enrolled',
    rating: '4.5',
    image: '/course-placeholder.svg',
    features: ['Feature 1', 'Feature 2']
  },
  children
}) => {
  return (
    <>
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="course-rating">
          <Award size={16} />
          {course.rating}
        </div>
      </div>
      
      <div className="course-content">
        <div className="course-university">{course.university}</div>
        <h3 className="course-title">{course.title}</h3>
        
        <div className="course-meta">
          <div className="meta-item">
            <Clock size={16} />
            {course.duration}
          </div>
          <div className="meta-item">
            <Users size={16} />
            {course.students}
          </div>
        </div>
        
        <div className="course-features">
          {course.features && course.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        <div className="course-actions">
          <button className="btn-primary">Learn More</button>
          <button className="btn-outline">Download Brochure</button>
          {children}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default CourseCard;