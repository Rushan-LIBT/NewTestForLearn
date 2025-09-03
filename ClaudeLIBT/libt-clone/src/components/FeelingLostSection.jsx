import './FeelingLostSection.css';

const FeelingLostSection = () => {
  return (
    <section className="feeling-lost-main-section">
      <div className="feeling-lost-container">
        
        {/* Section Header */}
        <div className="feeling-lost-header-section">
          <div className="feeling-lost-title-container">
            <h2 className="feeling-lost-title">
              Feeling a bit lost?
            </h2>
          </div>
          
          <div className="feeling-lost-description-container">
            <p className="feeling-lost-description">
              Take a look at our course offerings and find the perfect starting point for your educational journey.
            </p>
          </div>
        </div>

        {/* Subject Categories Section */}
        <div className="subject-categories-section">
          <div className="subject-categories-container">
            
            {/* Business and Management */}
            <div className="subject-category-item-container">
              <button className="subject-category-button">
                <div className="subject-category-content">
                  <div className="subject-icon-container">
                    💼
                  </div>
                  <div className="subject-title-container">
                    <h3 className="subject-title">Business and Management</h3>
                  </div>
                  <div className="subject-description-container">
                    <p className="subject-description">
                      Develop leadership skills and business acumen
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Computer Science and IT */}
            <div className="subject-category-item-container">
              <button className="subject-category-button">
                <div className="subject-category-content">
                  <div className="subject-icon-container">
                    💻
                  </div>
                  <div className="subject-title-container">
                    <h3 className="subject-title">Computer Science and IT</h3>
                  </div>
                  <div className="subject-description-container">
                    <p className="subject-description">
                      Master technology and programming skills
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Human Resources */}
            <div className="subject-category-item-container">
              <button className="subject-category-button">
                <div className="subject-category-content">
                  <div className="subject-icon-container">
                    👥
                  </div>
                  <div className="subject-title-container">
                    <h3 className="subject-title">Human Resources</h3>
                  </div>
                  <div className="subject-description-container">
                    <p className="subject-description">
                      Learn people management and organizational skills
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Law */}
            <div className="subject-category-item-container">
              <button className="subject-category-button">
                <div className="subject-category-content">
                  <div className="subject-icon-container">
                    ⚖️
                  </div>
                  <div className="subject-title-container">
                    <h3 className="subject-title">Law</h3>
                  </div>
                  <div className="subject-description-container">
                    <p className="subject-description">
                      Understand legal principles and justice systems
                    </p>
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Call to Action Section */}
        <div className="feeling-lost-cta-section">
          <div className="feeling-lost-cta-container">
            <button className="view-all-courses-button">
              View All Courses
            </button>
            <button className="speak-advisor-button">
              Speak to an Advisor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeelingLostSection;