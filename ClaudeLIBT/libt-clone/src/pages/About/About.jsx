import React, { useEffect } from 'react';

const About = () => {
  // useEffect(() => {
  //   document.title = "About LIBT - London Institute of Business & Technology";
  // }, []);
  return (
    <>
    <div className="about-page">
      <div className="container">
        <h1>About LIBT</h1>
        <div className="about-content">
          <p>
            The London Institute of Business & Technology (LIBT) is a leading provider of 
            flexible higher education, delivering world-class qualifications from top UK universities 
            to students worldwide.
          </p>
          <p>
            We offer a comprehensive range of undergraduate and postgraduate programmes, 
            professional certificates, and corporate training solutions designed to meet 
            the evolving needs of today's global marketplace.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;