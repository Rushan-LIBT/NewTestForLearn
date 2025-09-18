import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';
import React from 'react';
import QAA from '../../assets/QAA-member.png';

const Footer = ({ 
  contactInfo = {
    phone: '+44 20 7262 0022',
    email: 'info@libt.co.uk',
    address: '51 Gloucester Place, London W1U 8JF'
  },
  description = "Leading provider of flexible higher education, delivering world-class qualifications from top UK universities to students worldwide."
}) => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={QAA} alt="LIBT" className="footer-logo-img" />
              </div>
              <p className="footer-description">
                {description}
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <Phone size={16} />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Courses</h4>
              <ul>
                <li><a href="#">Undergraduate Degrees</a></li>
                <li><a href="#">Postgraduate Degrees</a></li>
                <li><a href="#">Professional Certificates</a></li>
                <li><a href="#">Corporate Training</a></li>
                <li><a href="#">CPD Courses</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Subject Areas</h4>
              <ul>
                <li><a href="#">Business & Management</a></li>
                <li><a href="#">Computing & IT</a></li>
                <li><a href="#">Health & Social Care</a></li>
                <li><a href="#">Law & Criminology</a></li>
                <li><a href="#">Psychology</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Student Support</a></li>
                <li><a href="#">Academic Support</a></li>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">Career Services</a></li>
                <li><a href="#">Library Services</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>About LIBT</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Partners</a></li>
                <li><a href="#">Quality Assurance</a></li>
                <li><a href="#">News & Events</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Data Protection</a>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="footer-copyright">
              <p>&copy; 2024 London Institute of Business & Technology. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;