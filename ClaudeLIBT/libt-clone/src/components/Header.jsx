import './Header.css';

const Header = () => {
  return (
    <header className="header">
      
      {/* Top Header Section - Contact Info */}
      <div className="header-top-section">
        <div className="header-top-container">
          <div className="contact-info-wrapper">
            
            {/* Email Contact */}
            <div className="email-contact-container">
              <span className="contact-icon">📧</span>
              <span>enquiries@libt.co.uk</span>
            </div>
            
            {/* Phone Contact */}
            <div className="phone-contact-container">
              <span className="contact-icon">📞</span>
              <span>+44-20-3870-5111</span>
            </div>
            
            {/* Login Button */}
            <div className="login-button-container">
              <button className="btn-login">
                Login
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      <nav className="main-navigation-section">
        <div className="navigation-container">
          
          {/* Logo Section */}
          <a href="/" className="logo-link">
          <div className="logo-section-container">
            <img 
              src="https://cdn.prod.website-files.com/5f0da8fd320acd2df8b13eb1/63ff59fb0b01cb563976beda_LIBT_Main_Logo_White.png" 
              alt="LIBT Logo" 
              className="logo-image"
            />
          </div>
          </a>

          {/* Menu Section */}
          <div className="menu-section-container">
            <ul className="navigation-menu-list">
              <li className="menu-item-container">
                <a href="#" className="menu-link">Courses</a>
              </li>

              <li className="menu-item-container">
                <a href="#" className="menu-link">Subject Areas</a>
              </li>

              <li className="menu-item-container">
                <a href="#" className="menu-link">Certification & Training</a>
              </li>

              <li className="menu-item-container">
                <a href="#" className="menu-link">Prospective Students</a>
              </li>

              <li className="menu-item-container">
                <a href="#" className="menu-link">About</a>
              </li>

              <li className="menu-item-container">
                <a href="#" className="menu-link">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;