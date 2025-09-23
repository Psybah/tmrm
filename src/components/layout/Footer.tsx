
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tmrm-green text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jamuhiyat Jalalullahi Society of Nigeria</h3>
            <p className="mb-4">Guided by Divine Light, Serving with Compassion</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-tmrm-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-tmrm-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/23480335352530" target="_blank" rel="noopener noreferrer" className="hover:text-tmrm-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-tmrm-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-tmrm-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-tmrm-gold transition-colors">Our Initiatives</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-tmrm-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-tmrm-gold transition-colors">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-tmrm-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>Number 61 Darlington Street Ago Tapa,<br />Mokola, Ibadan</div>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3" />
                <a href="tel:+23480335352530" className="hover:text-tmrm-gold transition-colors">0803 353 52530</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a href="mailto:Jalalullahi2025@gmail.com" className="hover:text-tmrm-gold transition-colors">Jalalullahi2025@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pattern-divider my-6"></div>
        
        <div className="text-center opacity-80 text-sm">
          <p>&copy; {new Date().getFullYear()} Jamuhiyat Jalalullahi Society of Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
