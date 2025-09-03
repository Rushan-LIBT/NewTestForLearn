import './Hero.css';

const Hero = () => {
  return (
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
                      At London Institute of Business and Technology
                    </p>
                  </div>
                  <div className="hero-title-container">
                    <h1 className="hero-main-title">
                      You can transform your dreams into reality!
                    </h1>
                  </div>
                  
                  {/* Hero Features */}
                  
                </div>
              </div> 

              {/* Hero Search Section */}
              <div className="hero-search-wrapper">
                <div className="hero-search-section">
                  <div className="hero-search-container">
                    <div className="search-input-container">
                      <input 
                        type="text" 
                        placeholder="Enter the course name or awarding body"
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
  );
};

export default Hero;