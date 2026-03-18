import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bridal Client",
    text: "Roma's team did an absolutely phenomenal job for my wedding. The makeup was flawless, lasted all night, and I felt like a queen. Highly recommend their bridal services!",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Student - Makeup Course",
    text: "Enrolling in the Professional Makeup Course was the best decision for my career. The hands-on training and expert guidance gave me the confidence to start my own freelance business.",
    rating: 5
  },
  {
    name: "Anjali Desai",
    role: "Regular Client",
    text: "I've been coming here for my hair spa and facials for over a year. The staff is incredibly professional, the ambiance is relaxing, and the hygiene standards are top-notch.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-beige-light/50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-rose-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Client & Student Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Words of <span className="text-rose-gold italic font-light">Appreciation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Don't just take our word for it. Hear what our beautiful clients and successful students have to say about their experience with us.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-beige-light/30 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-gold/20 relative"
            >
              <Quote className="absolute top-6 right-6 text-rose-gold/20" size={48} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed font-light mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center text-rose-gold font-serif font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
