import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-bold font-serif text-white mb-6 inline-block">
              Roma's
            </a>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
              Professional Ladies Beauty Services & Certified Beauty Courses in Andheri East, Mumbai. Elevating beauty, empowering careers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rose-gold hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rose-gold hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rose-gold hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Training Courses', 'Gallery', 'Contact Us'].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-rose-gold transition-colors text-sm font-light flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/50 mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Haircut & Styling', 'Bridal Makeup', 'Facial & Skin Care', 'Manicure & Pedicure', 'Hair Spa', 'Waxing & Threading'].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-rose-gold transition-colors text-sm font-light flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/50 mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-light text-gray-400">
                <MapPin size={18} className="text-rose-gold shrink-0 mt-0.5" />
                <span>Shop No. 3, Kazi Manzil, Gaothan Rd, Opposite Cigarette Factory, near Plus Computers, Chakala, Andheri East, Mumbai, Maharashtra 400099</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-gray-400">
                <Phone size={18} className="text-rose-gold shrink-0" />
                <a href="tel:+917981521835" className="hover:text-rose-gold transition-colors">+91 7981521835</a>
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-gray-400">
                <Mail size={18} className="text-rose-gold shrink-0" />
                <a href="mailto:info@romasbeauty.com" className="hover:text-rose-gold transition-colors">info@romasbeauty.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light text-center md:text-left">
            &copy; {currentYear} Roma's Professional Beauty Parlour & Training Centre. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-rose-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
