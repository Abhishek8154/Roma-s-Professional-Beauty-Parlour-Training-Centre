import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-soft-pink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-12 lg:mb-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Beauty Parlour Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold flex items-center justify-center text-white shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-lg">Trusted Beauty Destination</h4>
                    <p className="text-sm text-gray-600">Premium Services & Certified Training</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-gold-light/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-gold/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-rose-gold text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm border border-rose-gold/10">
              <span className="w-2 h-2 rounded-full bg-rose-gold animate-pulse"></span>
              About Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Elevating Beauty, <br />
              <span className="text-rose-gold italic font-light">Empowering Careers</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Roma's Professional Beauty Parlour & Training Centre is a trusted ladies beauty destination in Andheri East, Mumbai. We offer high-quality hair, skin, and beauty treatments designed to enhance your natural elegance.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              Beyond our premium parlour services, we are a certified training institute dedicated to shaping the next generation of beauty professionals. Whether you want to look your best or build a successful career in the beauty industry, Roma's is your ultimate destination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Expert Hair & Skin Care",
                "Professional Bridal Makeup",
                "Certified Beauty Courses",
                "Hands-on Practical Training"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-rose-gold shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gray-900 hover:bg-rose-gold transition-colors duration-300 shadow-lg"
            >
              Discover Our Services
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
