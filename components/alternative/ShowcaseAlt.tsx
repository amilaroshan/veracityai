'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const cases = [
  {
    title: 'Healthcare AI',
    category: 'Medical Diagnosis',
    description: 'ML-powered diagnostic system achieving 98% accuracy in early disease detection.',
    gradient: 'from-blue-500 to-cyan-500',
    stats: ['98% Accuracy', '10K+ Patients', '24/7 Monitoring'],
  },
  {
    title: 'Financial Analytics',
    category: 'Fintech',
    description: 'Real-time fraud detection system processing millions of transactions daily.',
    gradient: 'from-purple-500 to-pink-500',
    stats: ['99.9% Uptime', '$2M Saved', '5ms Response'],
  },
  {
    title: 'Smart Retail',
    category: 'E-commerce',
    description: 'AI recommendation engine increasing conversion rates by 45%.',
    gradient: 'from-green-500 to-emerald-500',
    stats: ['45% Increase', '1M+ Users', 'Real-time'],
  },
]

const ShowcaseAlt = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
            Case Studies
          </span>
          <h2 className="text-5xl font-semibold mt-6 mb-4 text-gray-900">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world impact across industries with measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 opacity-30"
                >
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                </motion.div>
              </div>

              <div className="p-8">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  View Case Study <FiArrowRight />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseAlt


