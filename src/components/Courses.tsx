import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, Sparkles } from 'lucide-react';

const courses = [
  {
    title: "Professional Makeup Artist",
    duration: "3 Months",
    description: "Master the art of makeup, from basic techniques to advanced bridal and editorial looks.",
    icon: Sparkles
  },
  {
    title: "Advanced Hair Styling",
    duration: "2 Months",
    description: "Learn modern haircuts, coloring techniques, chemical treatments, and creative styling.",
    icon: Scissors
  },
  {
    title: "Bridal Makeup Course",
    duration: "1 Month",
    description: "Specialized training in traditional and contemporary bridal makeup, draping, and hair.",
    icon: Award
  },
  {
    title: "Skin & Facial Training",
    duration: "6 Weeks",
    description: "In-depth knowledge of skin types, advanced facials, and modern skincare treatments.",
    icon: Droplet
  },
  {
    title: "Nail Art & Extension",
    duration: "4 Weeks",
    description: "Comprehensive training in acrylics, gels, 3D nail art, and professional nail care.",
    icon: Palette
  },
  {
    title: "Complete Beauty Parlour",
    duration: "6 Months",
    description: "An all-inclusive diploma covering hair, skin, makeup, and salon management.",
    icon: GraduationCap
  }
];

// Re-import icons that are missing from the top level
import { Scissors, Droplet, Palette } from 'lucide-react';

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-beige-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-pink/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-rose-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Build Your Career
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Certified Beauty <span className="text-rose-gold italic font-light">Courses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Turn your passion into a profession with our comprehensive, hands-on beauty training programs led by industry experts.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-gold/10 group relative overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-soft-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-rose-gold/10 text-rose-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-gold group-hover:text-white transition-colors duration-300">
                  <course.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                
                <div className="flex items-center text-sm font-medium text-rose-gold mb-4 bg-rose-gold/5 inline-flex px-3 py-1 rounded-full">
                  <BookOpen size={14} className="mr-2" />
                  Duration: {course.duration}
                </div>
                
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  {course.description}
                </p>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-rose-gold transition-colors group-hover:underline underline-offset-4 decoration-rose-gold decoration-2"
                >
                  Inquire Now
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
