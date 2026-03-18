import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Elegant Beauty Salon"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-gold/20 text-rose-100 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-rose-gold/30">
            Welcome to Luxury
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Roma's Professional Beauty Parlour <br className="hidden md:block" />
            <span className="text-rose-gold-light italic font-light">& Training Centre</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-light drop-shadow-md">
            Professional Ladies Beauty Services & Certified Beauty Courses in Andheri East, Mumbai
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-rose-gold hover:bg-rose-gold-dark transition-all duration-300 shadow-lg hover:shadow-rose-gold/30 transform hover:-translate-y-1"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white border-2 border-white/70 hover:bg-white hover:text-rose-gold transition-all duration-300 backdrop-blur-sm"
            >
              Explore Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
      </motion.div>
    </section>
  );
}
