import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import VisionSection from "../components/VisionSection";
import InitiativesSection from "../components/InitiativesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  HeartIcon,
  TrophyIcon,
  UsersIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const stats = [
    {
      icon: UsersIcon,
      number: "100+",
      label: "Active Volunteers",
      color: "from-orange-500 to-red-500",
      featured: true
    },
    {
      icon: UserGroupIcon,
      number: "1000+",
      label: "Lives Impacted",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AcademicCapIcon,
      number: "500+",
      label: "Students Educated",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BuildingOfficeIcon,
      number: "10+",
      label: "Cities",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: HeartIcon,
      number: "200+",
      label: "Medical Camps",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: TrophyIcon,
      number: "50+",
      label: "Awards & Recognition",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <Layout
      title={"Namaskar Humanity Welfare Society - Transforming Lives, Building Hope"}
      description={
        "Join Namaskar Humanity Welfare Society in creating lasting change through education, healthcare, and women empowerment initiatives. A UP government-registered NGO making a positive impact on society."
      }
      keywords={"NGO, charity, education, healthcare, women empowerment, social work, volunteer, donate, Namaskar Humanity, UP government registered"}
    >
      {/* Hero Section */}
      <Hero />

      {/* Welcome Message Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Welcome to Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mission</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AS</span>
            </div>
            </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                "I'm Anurag Singh and I'm super excited to welcome you to Namaskar Humanity Welfare Society. 
                Together, we can create meaningful change and build a better future for those who need it most."
              </blockquote>
              <cite className="text-lg font-semibold text-blue-600">- Anurag Singh, Founder</cite>
              
              <p className="text-lg text-gray-600 leading-relaxed mt-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Namaskar Humanity Welfare Society is a UP government-registered NGO dedicated to making a positive 
                impact on society through various initiatives. Our primary focus is on providing quality education, 
                accessible healthcare services, and raising awareness on critical social issues.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Impact</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              See the difference we've made together in transforming lives across communities
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`text-center group ${stat.featured ? 'lg:col-span-1 lg:scale-110' : ''}`}
              >
                <div className={`${stat.featured ? 'w-24 h-24' : 'w-20 h-20'} bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.featured ? 'ring-4 ring-orange-400/30 shadow-2xl shadow-orange-500/25' : ''}`}>
                  <stat.icon className={`${stat.featured ? 'w-12 h-12' : 'w-10 h-10'} text-white`} />
                </div>
                <motion.h3 
                  className={`${stat.featured ? 'text-5xl md:text-6xl' : 'text-4xl'} font-bold text-white mb-2 ${stat.featured ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400' : ''}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.number}
                </motion.h3>
                <p className={`${stat.featured ? 'text-orange-200 font-bold text-lg' : 'text-gray-300 font-medium'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </p>
                {stat.featured && (
                  <motion.div 
                    className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    🌟 Growing Strong!
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <InitiativesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ready to Make a Difference?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-12 leading-relaxed" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join Namaskar Humanity Welfare Society as a volunteer and become part of a mission to transform lives 
              and build a better future for those in need. Your efforts can make a real impact in underprivileged communities.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
            <Link
              to="/register-as-volunteer"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Become a Volunteer
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
            </Link>
              
            <Link
              to="/donate"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Make a Donation
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <p className="text-lg leading-relaxed">
                Whether you're passionate about education, healthcare, women's empowerment, or environmental sustainability, 
                your contribution matters. Together, we can create a more equitable and compassionate society—your journey 
                toward making a difference starts here!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
