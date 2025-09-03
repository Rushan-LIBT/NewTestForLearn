// src/components/Navbar.jsx
import { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import 'Navbar.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#0C2340] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/5f0da8fd320acd2df8b13eb1/63ff59fb0b01cb563976beda_LIBT_Main_Logo_White.png"
            alt="LIBT Logo"
            className="h-10"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="hidden md:block">
          <a
            href="/apply"
            className="bg-yellow-400 text-[#0C2340] px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0C2340] px-6 pb-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-yellow-400 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/apply"
            className="block bg-yellow-400 text-[#0C2340] px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition text-center"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );

export default Navbar
