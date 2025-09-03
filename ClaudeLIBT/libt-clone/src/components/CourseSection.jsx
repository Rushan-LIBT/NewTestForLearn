import { BookOpen, Clock, Users, Award } from 'lucide-react';
import './CourseSection.css';

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: 'MBA - Master of Business Administration',
      university: 'University of Chichester',
      duration: '18-24 months',
      students: '2,500+ enrolled',
      rating: '4.8',
      image: '/course-placeholder.svg',
      features: ['100% Online', 'Flexible Schedule', 'Career Support']
    },
    {
      id: 2,
      title: 'BSc (Hons) Computing',
      university: 'University of Hertfordshire',
      duration: '3-4 years',
      students: '1,800+ enrolled',
      rating: '4.7',
      image: '/course-placeholder.svg',
      features: ['Industry Focused', 'Practical Projects', 'Work Placement']
    },
    {
      id: 3,
      title: 'MSc Healthcare Management',
      university: 'University of Wolverhampton',
      duration: '12-18 months',
      students: '1,200+ enrolled',
      rating: '4.9',
      image: '/course-placeholder.svg',
      features: ['NHS Approved', 'Expert Faculty', 'Real-world Case Studies']
    }
  ];

  return (
    <section className="course-section">
      <div className="container">
        <div className="section-header">
          <h2>Popular Courses</h2>
          <p>Discover our most sought-after programs designed to advance your career</p>
        </div>
        
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
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
                  {course.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="course-actions">
                  <button className="btn-primary">Learn More</button>
                  <button className="btn-outline">Download Brochure</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-footer">
          <button className="btn-secondary">View All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;