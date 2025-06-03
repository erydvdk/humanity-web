import React, { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Layout from "../layout/Layout";
import ImageCard from "../components/ImageCard";
import axios from "axios";
import LodingButton from "../components/LoadingButton";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { 
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Program = () => {
  const server = import.meta.env.VITE_SERVER;
  const [loading, setLoading] = useState(false);
  const [programData, setProgramData] = useState();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getAllPrograms = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${server}/program/get`);
      setProgramData(res.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPrograms();
  }, []);

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

  const stats = [
    { number: "50+", label: "Active Programs", icon: AcademicCapIcon },
    { number: "1000+", label: "Beneficiaries", icon: UserGroupIcon },
    { number: "15+", label: "States Covered", icon: HeartIcon },
  ];

  return (
    <Layout
      title={"Our Programs - Namaskar Humanity Welfare Society"}
      description={
        "Discover our comprehensive programs designed to create lasting change. From education and healthcare to women empowerment and community development, join us in transforming lives across India."
      }
      keywords={"programs, education, healthcare, community development, volunteer, NGO"}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">Our Impact Programs</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Change</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Discover our comprehensive programs designed to uplift communities through education, 
              healthcare, and sustainable development initiatives.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register-as-volunteer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <UserGroupIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Join Our Programs
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <motion.h3 
                  className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
            </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Namaskar Humanity Welfare Society regularly organizes comprehensive programs aimed at 
                improving lives in underprivileged communities. From education and healthcare to environmental 
                protection and women's empowerment, each initiative creates lasting positive change.
              </p>
            </motion.div>

          {loading ? (
            <div className="flex justify-center">
              <LodingButton />
            </div>
          ) : (
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {programData?.data?.map((program, index) => (
                  <motion.div
                    key={program?._id}
                    variants={itemVariants}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={program?.coverImage?.url} 
                        alt={program?.title}
                        className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {program?.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {program?.description?.substring(0, 120)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-blue-600 font-medium bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                          Active Program
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 text-sm sm:text-base"
                        >
                          Learn More
                          <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="text-center mt-12 sm:mt-16">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Ready to Make a Difference?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Join our programs as a volunteer and become part of a mission to transform lives 
                  and build stronger communities across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/register-as-volunteer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    >
                      <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      Volunteer with Us
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/donate"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    >
                      <span className="text-lg">💝</span>
                      Support Our Programs
                    </Link>
                  </motion.div>
                </div>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Program;
