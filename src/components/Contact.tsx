import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-beige-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-rose-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Book Your <span className="text-rose-gold italic font-light">Appointment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Ready to transform your look or start your beauty career? Contact us today to schedule a consultation or inquire about our courses.
            </p>
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-rose-gold/10"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center text-rose-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Shop No. 3, Kazi Manzil, Gaothan Rd,<br />
                      Opposite Cigarette Factory, near Plus Computers,<br />
                      Chakala, Andheri East, Mumbai,<br />
                      Maharashtra 400099, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center text-rose-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                    <a href="tel:+917981521835" className="text-gray-600 font-light hover:text-rose-gold transition-colors block">
                      +91 7981521835
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center text-rose-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                    <p className="text-gray-600 font-light">
                      Mon - Sun: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917981521835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
                <a
                  href="https://maps.app.goo.gl/vy1Wo1Q13euhdTRdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-gray-900 bg-white border border-gray-200 hover:border-rose-gold hover:text-rose-gold transition-colors shadow-sm"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-rose-gold/10"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send an Inquiry</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                  >
                    <option value="" disabled selected>Select a Service or Course</option>
                    <optgroup label="Parlour Services">
                      <option value="haircut">Haircut & Styling</option>
                      <option value="bridal">Bridal Makeup</option>
                      <option value="facial">Facial & Skin Care</option>
                      <option value="other-service">Other Service</option>
                    </optgroup>
                    <optgroup label="Training Courses">
                      <option value="makeup-course">Professional Makeup Course</option>
                      <option value="hair-course">Advanced Hair Styling Course</option>
                      <option value="full-course">Complete Beauty Parlour Course</option>
                      <option value="other-course">Other Course</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold/50 focus:border-rose-gold outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-rose-gold hover:bg-rose-gold-dark transition-all duration-300 shadow-lg hover:shadow-rose-gold/30 transform hover:-translate-y-1"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
