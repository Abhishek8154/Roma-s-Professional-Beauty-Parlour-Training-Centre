import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Droplet, Smile, Heart, Star, Palette, Brush } from 'lucide-react';

const services = [
  {
    title: "Haircut & Hair Styling",
    description: "Trendy cuts and elegant styling tailored to your face shape and personality.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Hair Spa & Treatments",
    description: "Deep conditioning, keratin, and spa treatments for healthy, shiny hair.",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Hair Coloring",
    description: "Global color, highlights, balayage, and root touch-ups using premium products.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Facial & Skin Care",
    description: "Rejuvenating facials, cleanups, and skin treatments for a glowing complexion.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Bridal Makeup",
    description: "Flawless, long-lasting bridal makeup for your special day.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Party Makeup",
    description: "Glamorous makeup looks for parties, engagements, and events.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Manicure & Pedicure",
    description: "Relaxing hand and foot care for soft, beautiful nails.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Waxing & Threading",
    description: "Gentle and hygienic hair removal services for smooth skin.",
    icon: Brush,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-rose-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Premium Beauty <span className="text-rose-gold italic font-light">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Experience luxury and professionalism with our wide range of ladies beauty services, designed to make you look and feel your absolute best.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-rose-gold shadow-sm transform group-hover:rotate-12 transition-transform duration-300">
                  <service.icon size={20} />
                </div>
              </div>
              
              <div className="p-6 relative bg-white">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-rose-gold hover:text-rose-gold-dark transition-colors">
                    Book Now
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
