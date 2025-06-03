import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HeartIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/24/outline';

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const values = [
    {
      icon: HeartIcon,
      title: "Compassion",
      description: "At the heart of everything we do lies genuine compassion for those in need."
    },
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description: "We embrace innovative approaches to solve complex social challenges."
    },
    {
      icon: UsersIcon,
      title: "Community",
      description: "Building strong, inclusive communities where everyone has a voice."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Vision</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Namaskar Humanity Welfare Society envisions a just and inclusive society where every individual, 
              regardless of their background, has access to education, healthcare, and equal opportunities.
            </p>
          </motion.div>

          {/* Main Vision Content */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Empowering Communities, Transforming Lives</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to empower the underprivileged, promote gender equality, and raise awareness 
                about social and environmental issues. We strive to build a compassionate community where 
                everyone can thrive, contribute, and lead a dignified life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through sustainable development initiatives and collaborative efforts, we aim to bring 
                lasting positive change to society, creating opportunities for a better, more equitable future for all.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "We believe that change begins with understanding, grows with compassion, 
                  and flourishes through collective action."
                </blockquote>
                <cite className="text-blue-600 font-semibold">- Anurag Singh, Founder</cite>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;