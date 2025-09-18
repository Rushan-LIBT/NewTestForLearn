import React, { use, useEffect } from 'react';
import './Home.css';
import CourseSection from '../../components/CourseSection/CourseSection';
import FeelingLostSection from '../../components/FeelingLostSection/FeelingLostSection';
import RestSpreadSection from '../../components/RestSpreadSection/RestSpreadSection';



const Home = ({ siteData }) => {
  // useEffect(() => {
  //   document.title = "Home - London Institute of Business & Technology";
  // }, []);
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-main-section">
        <div className="hero-background-container">
          <div className="hero-overlay-container">
            <div className="hero-content-wrapper">
              <div className="hero-align">

                {/* Hero Text Section */}
                <div className="hero-content-container">
                  <div className="hero-text-section">
                    <div className="hero-description-container">
                      <p className="hero-description-text">
                        {siteData?.hero?.description || "At London Institute of Business and Technology"}
                      </p>
                    </div>
                    <div className="hero-title-container">
                      <h1 className="hero-main-title">
                        {siteData?.hero?.title || "You can transform your dreams into reality!"}
                      </h1>
                    </div>
                  </div>
                </div> 

                {/* Hero Search Section */}
                <div className="hero-search-wrapper">
                  <div className="hero-search-section">
                    <div className="hero-search-container">
                      <div className="search-input-container">
                        <input 
                          type="text" 
                          placeholder={siteData?.hero?.searchPlaceholder || "Enter the course name or awarding body"}
                          className="hero-search-input"
                        />
                      </div>
                      <div className="search-button-container">
                        <button className="hero-search-button">
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section> 


      {/* Feeling Lost Section */}
      <FeelingLostSection 
        title={siteData?.feelingLost?.title}
        description={siteData?.feelingLost?.description}
        categories={siteData?.feelingLost?.categories}
        buttons={siteData?.feelingLost?.buttons}
      />

      {/* Course Section */}
      <CourseSection 
        title={siteData?.courses?.title}
        subtitle={siteData?.courses?.subtitle}
        courses={siteData?.courses?.list}
      >
        <h1>Hello World</h1>
      </CourseSection>  


      {/* Rest & Spread Demo Section */}
      <RestSpreadSection 
        title={siteData?.restSpreadDemo?.title}
        subtitle={siteData?.restSpreadDemo?.subtitle}
        primaryFeature={siteData?.restSpreadDemo?.primaryFeature}
        additionalInfo={siteData?.restSpreadDemo?.additionalInfo}
        {...siteData?.restSpreadDemo} // SPREAD operator - passes all remaining props
      />

    </div>
  );
};

export default Home;