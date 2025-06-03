import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import {
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa';
import logo from '../assets/logo/nhws-logo.png';
import logoText from '../assets/logo/nhws-text.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/program' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
    { name: 'Volunteer', path: '/register-as-volunteer' },
    { name: 'Donate', path: '/donate' }
  ];

  const programs = [
    { name: 'Education Support', path: '/program' },
    { name: 'Healthcare Services', path: '/program' },
    { name: 'Women Empowerment', path: '/program' },
    { name: 'Awareness Campaigns', path: '/program' },
    { name: 'Skill Development', path: '/program' },
    { name: 'Community Building', path: '/program' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Organization Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="NHWS Logo" className="w-12 h-12" />
              <img src={logoText} alt="NHWS" className="h-8" />
          </Link>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Namaskar Humanity Welfare Society is a UP government-registered NGO dedicated to creating lasting positive change through education, healthcare, and empowerment initiatives.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Welfare Street, Lucknow, Uttar Pradesh, India 226001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@namaskarhumanity.org</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
          <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
          >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
          </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
          <Link
                    to={program.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
          >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {program.name}
          </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Stay Connected
            </h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for updates on our programs and impact.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubscribed
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
        </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>&copy; 2024 Namaskar Humanity Welfare Society. All rights reserved.</span>
          </div>
            
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>for humanity</span>
          </div>

            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
