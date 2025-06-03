import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'antd';
import b1 from '../assets/wallpaper/b1.jpeg';
import b2 from '../assets/wallpaper/b2.jpeg';
import b3 from '../assets/wallpaper/b3.jpg';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel autoplay effect="fade" dots={false}>
          <div className="relative h-screen">
            <img 
              className="w-full h-full object-cover" 
              src={b1} 
              alt="Community helping each other" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative h-screen">
            <img 
              className="w-full h-full object-cover" 
              src={b2} 
              alt="Education initiatives" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative h-screen">
            <img 
              className="w-full h-full object-cover" 
              src={b3} 
              alt="Healthcare programs" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        </Carousel>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Transforming Lives,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Building Hope
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join <strong>Namaskar Humanity Welfare Society</strong> in creating lasting change through education, healthcare, and women empowerment initiatives across communities.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                <span className="flex items-center gap-2">
                  Become a Volunteer
                  <ArrowDownIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                Donate Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDownIcon className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 