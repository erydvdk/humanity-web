import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white";
  const errorClasses = "border-red-500 focus:ring-red-500";

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Get in Touch
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
          Have questions or want to get involved? We'd love to hear from you!
        </p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.name.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                pattern: {
                  value: /^[+]?[\d\s\-\(\)]+$/,
                  message: 'Invalid phone number'
                }
              })}
              className={`${inputClasses} ${errors.phone ? errorClasses : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.phone.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              {...register('subject', { required: 'Please select a subject' })}
              className={`${inputClasses} ${errors.subject ? errorClasses : ''}`}
            >
              <option value="">Select a subject</option>
              <option value="volunteer">Volunteer Opportunities</option>
              <option value="donation">Donation Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support Request</option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.subject.message}
              </p>
            )}
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows="6"
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
            className={`${inputClasses} resize-none ${errors.message ? errorClasses : ''}`}
            placeholder="Tell us about your inquiry or how you'd like to get involved..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <ExclamationCircleIcon className="w-4 h-4" />
              {errors.message.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              {...register('consent', { required: 'Please agree to our privacy policy' })}
              className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{' '}
              and consent to being contacted by Namaskar Humanity Welfare Society.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <ExclamationCircleIcon className="w-4 h-4" />
              {errors.consent.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <PaperAirplaneIcon className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
          >
            <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-800">Message sent successfully!</h4>
              <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
          >
            <ExclamationCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-800">Something went wrong!</h4>
              <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;