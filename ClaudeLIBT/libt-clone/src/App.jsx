import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Contact from './pages/Contact/Contact';
import { siteData } from './data/siteData';

function App() {
  return (
    <Router>
      <div className="app">
        <Header contactInfo={siteData.contactInfo} />
        <main>
          <Routes>
            <Route path="/" element={<Home siteData={siteData} />} />
            <Route path="/courses" element={<Courses courses={siteData.courses} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact contactInfo={siteData.contactInfo} />} />
          </Routes>
        </main>
        <Footer contactInfo={siteData.footer.contactInfo} description={siteData.footer.description} />
      </div>
    </Router>
  )
}

export default App;       