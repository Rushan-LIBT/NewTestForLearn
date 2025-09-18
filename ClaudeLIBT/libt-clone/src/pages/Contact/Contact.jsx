import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';

const Contact = ({ contactInfo }) => {
  return (
    <>
    <Helmet>
      <title>Contact Us - London Institute of Business & Technology</title>
    </Helmet>
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <h3>Phone</h3>
                <p>{contactInfo?.phone || '+44-20-3870-5111'}</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <h3>Email</h3>
                <p>{contactInfo?.email || 'enquiries@libt.co.uk'}</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <div>
                <h3>Address</h3>
                <p>{contactInfo?.address || '51 Gloucester Place, London W1U 8JF'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;