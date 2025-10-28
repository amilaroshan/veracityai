'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCpu, FiEye, FiMessageSquare, FiTrendingUp, FiZap, FiShield } from 'react-icons/fi'

const services = [
  {
    icon: FiCpu,
    title: 'Machine Learning',
    description: 'Advanced ML models for prediction, classification, and pattern recognition.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiEye,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual AI solutions.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiMessageSquare,
    title: 'NLP & Text Mining',
    description: 'Natural language processing for sentiment analysis and text extraction.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with AI.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FiZap,
    title: 'Real-time Processing',
    description: 'Lightning-fast data processing and instant insights.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FiShield,
    title: 'Secure AI',
    description: 'Enterprise-grade security and privacy-first AI solutions.',
    color: 'from-indigo-500 to-purple-500',
  },
]

const ServicesAlt = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
            Our Services
          </span>
          <h2 className="text-5xl font-semibold mt-6 mb-4 text-gray-900">
            Powered by <span className="text-gradient">Advanced AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and Machine Learning solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <service.icon className="text-2xl text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className={`h-1 bg-gradient-to-r ${service.color} rounded-full mt-6`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesAlt


