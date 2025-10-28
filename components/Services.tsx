'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    category: 'Deep Learning',
    title: 'Predictive Intelligence Systems',
    description: 'Advanced ML algorithms for recommendation systems, predictive analytics, and intelligent automation. Transform your data into actionable insights with state-of-the-art models.',
    color: 'from-sky-400/25 to-blue-400/10',
    videoFilter: 'hue-rotate(195deg) saturate(1.6) brightness(1.05)',
  },
  {
    category: 'Computer Vision',
    title: 'Visual AI & Image Recognition',
    description: 'Cutting-edge object detection and image classification powered by deep neural networks. Enable visual intelligence for industrial automation and real-time analysis.',
    color: 'from-cyan-500/25 to-blue-500/10',
    videoFilter: 'hue-rotate(175deg) saturate(1.4) brightness(1.1)',
  },
  {
    category: 'Natural Language',
    title: 'Cognitive Language Processing',
    description: 'Natural language processing solutions for sentiment analysis, text classification, and semantic understanding. Extract meaning from unstructured data at scale.',
    color: 'from-indigo-400/25 to-blue-600/10',
    videoFilter: 'hue-rotate(235deg) saturate(1.5) brightness(1.0)',
  },
  {
    category: 'Reinforcement',
    title: 'Autonomous Learning Systems',
    description: 'Intelligent decision-making systems using deep reinforcement learning. Optimize complex strategies for finance, gaming, and autonomous operations.',
    color: 'from-blue-600/25 to-indigo-500/10',
    videoFilter: 'hue-rotate(215deg) saturate(1.7) brightness(1.05)',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Operationalizing AI
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            As one of the region's fastest-growing Machine Learning Software Companies, VeracityAI 
            is responsible for delivering state-of-the-art Science and AI technologies for Machine 
            Learning Cognitive AI. Our focus is to advise and fully deploy technologies, the new way 
            of code, and the elements of our clients. Our focus is to unlock the real potential of 
            Machine Learning and Cognitive AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Video Background - Full Card */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                style={{ filter: service.videoFilter }}
              >
                <source src="/7891_Particles_Particle_1280x720.mp4" type="video/mp4" />
              </video>
              
              {/* Dark Gradient Overlay with Subtle Color */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.color} via-gray-900/70 to-gray-900/90`} />

              {/* Content Area */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-end min-h-[400px]">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-2xl font-semibold mt-3 mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-black bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all w-fit"
                >
                  View Case studies
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
    </section>
  )
}

export default Services

