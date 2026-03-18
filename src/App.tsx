/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-gold/30 selection:text-rose-gold-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
