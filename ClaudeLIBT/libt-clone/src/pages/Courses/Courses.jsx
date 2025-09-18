import React from 'react';

const Courses = ({ courses }) => {
  return (
    <div className="courses-page">
      <div className="container">
        <h1>Our Courses</h1>
        <div className="courses-grid">
          <div className="course-category">
            <h2>Undergraduate Degrees</h2>
            <ul>
              <li>Business & Management</li>
              <li>Computing & IT</li>
              <li>Health & Social Care</li>
            </ul>
          </div>
          <div className="course-category">
            <h2>Postgraduate Degrees</h2>
            <ul>
              <li>MBA</li>
              <li>MSc Computing</li>
              <li>MSc Psychology</li>
            </ul>
          </div>
          <div className="course-category">
            <h2>Professional Certificates</h2>
            <ul>
              <li>Project Management</li>
              <li>Digital Marketing</li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;