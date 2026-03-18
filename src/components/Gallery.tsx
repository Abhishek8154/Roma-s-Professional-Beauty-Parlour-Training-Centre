import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bridal Makeup",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hair Styling",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Party Makeup",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Facial Treatment",
    span: "col-span-2 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Manicure & Pedicure",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1516975080661-46bce0d437e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Nail Art",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Beauty Training",
    span: "col-span-2 row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-soft-pink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-rose-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Beauty in <span className="text-rose-gold italic font-light">Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Explore our stunning transformations, elegant bridal looks, and behind-the-scenes moments from our training academy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg tracking-wider uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
