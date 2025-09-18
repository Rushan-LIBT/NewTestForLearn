import React from 'react';
import './CourseSection.css';
import CourseCard from '../CourseCard/CourseCard';

const CourseSection = ({ 
  title = "Popular Courses",
  subtitle = "Discover our most sought-after programs designed to advance your career",
  courses = [
    {
      id: 1,
      title,
      university,
      duration,
      students,
      rating,
      image,
      features: ['100% Online', 'Flexible Schedule', 'Career Support']
    }
  ]
}) => {

  return (
    <>
    <section className="course-section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
        <div className="courses-grid">
          {courses && courses.map(course => (
            <CourseCard key={course.id} course={course}>
              <div className="course-additional-info">
                <p>Additional course information for {course.title}</p>
              </div>
            </CourseCard>
          ))}
        </div>
        
        <div className="section-footer">
          <button className="btn-secondary">View All Courses</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default CourseSection;