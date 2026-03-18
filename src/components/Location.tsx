import React from 'react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section className="py-0 relative h-[500px] bg-gray-100">
      <div className="absolute inset-0 w-full h-full">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3be7c9d90e067ba9%3A0x16ce300c713f99e4!2sRoma&#39;s%20Professional%20Beauty%20Parlour%20%26%20Training%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Roma's Professional Beauty Parlour Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md text-center pointer-events-auto border border-rose-gold/20"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Visit Our Parlour</h3>
          <p className="text-gray-600 font-light mb-6">
            Conveniently located in Andheri East, Mumbai. Drop by for a consultation or a relaxing session.
          </p>
          <a
            href="https://maps.app.goo.gl/vy1Wo1Q13euhdTRdA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-rose-gold hover:bg-rose-gold-dark transition-colors shadow-md"
          >
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
