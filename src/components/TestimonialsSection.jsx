import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Volunteer",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "Working with Namaskar Humanity has been incredibly fulfilling. The organization's dedication to education and women empowerment is truly inspiring. I've seen firsthand how they transform lives in rural communities.",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Medical Camp Coordinator",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "As a medical professional, I'm impressed by their healthcare initiatives. The medical camps are well-organized and reach the most underserved areas. Their impact on community health is remarkable.",
      location: "Delhi, India"
    },
    {
      id: 3,
      name: "Sunita Devi",
      role: "Program Beneficiary",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "The skill development program changed my life completely. I learned tailoring and now run my own small business. My family's financial situation has improved tremendously thanks to NHWS.",
      location: "Varanasi, Uttar Pradesh"
    },
    {
      id: 4,
      name: "Amit Singh",
      role: "Education Volunteer",
      image: "/api/placeholder/100/100",
      rating: 5,
      content: "Teaching children in their education programs has been one of the most rewarding experiences. The joy on children's faces when they learn something new is priceless. NHWS is doing amazing work.",
      location: "Lucknow, Uttar Pradesh"
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              What People Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">About Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Hear from the volunteers, beneficiaries, and partners who are part of our mission to create positive change in communities.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <ChatBubbleLeftIcon className="w-16 h-16 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                  "{testimonial.content}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                {/* Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Want to share your experience with us?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Share Your Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 