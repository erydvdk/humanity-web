import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  AcademicCapIcon, 
  HeartIcon, 
  SpeakerWaveIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import education1 from '../assets/wallpaper/education.jpeg';
import awareness from '../assets/wallpaper/11.jpg';
import woman from '../assets/wallpaper/woman.jpg';
import health from '../assets/wallpaper/health.jpeg';

const InitiativesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const initiatives = [
    {
      icon: AcademicCapIcon,
      title: "Education",
      description: "Education is the key to unlocking opportunities and breaking the cycle of poverty. We provide resources, scholarships, and support to students in need, believing that education is a fundamental right, not a privilege.",
      image: education1,
      stats: "500+ Students Supported",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: SpeakerWaveIcon,
      title: "Awareness",
      description: "Awareness is the first step towards change. We organize campaigns on various social and environmental issues, such as hygiene, sanitation, climate change, and more to inspire action in our communities.",
      image: awareness,
      stats: "50+ Awareness Campaigns",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HeartIcon,
      title: "Healthcare",
      description: "We are passionate about improving community health and well-being. Through health initiatives, medical camps, and awareness programs, we ensure everyone has access to healthcare services.",
      image: health,
      stats: "200+ Medical Camps",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: UserGroupIcon,
      title: "Women Empowerment",
      description: "We are dedicated to making women self-reliant through education, skill development, and employment opportunities. Our mission is to strengthen women's role in society through various empowerment programs.",
      image: woman,
      stats: "300+ Women Empowered",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Initiatives</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Discover how we're making a difference through our comprehensive programs designed to uplift communities and create lasting impact.
            </p>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${initiative.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Icon and Stats */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                      <initiative.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {initiative.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {initiative.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${initiative.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InitiativesSection; 