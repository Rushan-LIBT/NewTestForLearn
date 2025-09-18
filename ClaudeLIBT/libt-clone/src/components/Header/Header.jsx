import './Header.css';
import { Link } from 'react-router-dom';
import libtLogo from '../../assets/libt-logo.png';
import CoursesMenu from '../CoursesMenu/CoursesMenu';


const Header = ({ contactInfo = { email, phone } }) => {
  return (
    <header className="header">
      
      {/* Top Header Section - Contact Info */}
      <div className="header-top-section">
        <div className="header-top-container">
          <div className="contact-info-wrapper">
            
            {/* Email Contact */}
            <div className="email-contact-container">
              <span className="contact-icon">📧</span>
              <span>{contactInfo.email}</span>
            </div>
            
            {/* Phone Contact */}
            <div className="phone-contact-container">
              <span className="contact-icon">📞</span>
              <span>{contactInfo.phone}</span>
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
          <Link to="/" className="logo-link">
          <div className="logo-section-container">
            <img 
              src={libtLogo}
              alt="LIBT Logo" 
              className="logo-image"
            />
          </div>
          </Link>

          {/* Menu Section */}
          <div className="menu-section-container">
            <ul className="navigation-menu-list">
              <li className="menu-item-container">
                <CoursesMenu />
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
                <Link to="/about" className="menu-link">About</Link>
              </li>

              <li className="menu-item-container">
                <Link to="/contact" className="menu-link">Contact</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;