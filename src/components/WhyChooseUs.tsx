import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, HandHeart, Sparkles, Droplets, Compass } from 'lucide-react';

const features = [
  {
    title: "Experienced Professionals",
    description: "Our team consists of highly trained and certified beauty experts.",
    icon: Users
  },
  {
    title: "Certified Training",
    description: "Industry-recognized certificates upon successful course completion.",
    icon: ShieldCheck
  },
  {
    title: "Hands-On Learning",
    description: "Practical, real-world experience on live models during training.",
    icon: HandHeart
  },
  {
    title: "Premium Products",
    description: "We use only top-tier, skin-friendly international beauty brands.",
    icon: Sparkles
  },
  {
    title: "Hygienic Environment",
    description: "Strict sanitation protocols for a safe and clean experience.",
    icon: Droplets
  },
  {
    title: "Career Guidance",
    description: "Placement assistance and business setup advice for students.",
    icon: Compass
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-rose-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                The Roma's Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Why Choose <br />
                <span className="text-rose-gold italic font-light">Our Parlour?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                Whether you're visiting for a relaxing spa day, preparing for your wedding, or enrolling in our beauty academy, we guarantee excellence, hygiene, and personalized care in everything we do.
              </p>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-full bg-soft-pink flex items-center justify-center border border-rose-gold/20">
                  <span className="text-2xl font-serif font-bold text-rose-gold">10+</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-lg">Years of Experience</h4>
                  <p className="text-sm text-gray-500">In Beauty & Training</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gray-900 hover:bg-rose-gold transition-colors duration-300 shadow-lg"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-beige-light/50 p-6 rounded-2xl hover:bg-soft-pink transition-colors duration-300 border border-transparent hover:border-rose-gold/20"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-gold mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
