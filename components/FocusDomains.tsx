'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, LineChart, Package, Shield, Radio, Activity } from 'lucide-react'

const domains = [
  { icon: TrendingUp, title: 'Banking and Finance', color: 'from-green-500 to-emerald-500' },
  { icon: LineChart, title: 'Capital Markets', color: 'from-blue-500 to-cyan-500' },
  { icon: Package, title: 'Manufacturing and Logistics', color: 'from-orange-500 to-red-500' },
  { icon: Shield, title: 'Insurance', color: 'from-purple-500 to-pink-500' },
  { icon: Radio, title: 'Telecommunications', color: 'from-indigo-500 to-blue-500' },
  { icon: Activity, title: 'Healthcare', color: 'from-red-500 to-pink-500' },
]

const FocusDomains = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Our <span className="text-gradient">focus domains</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Building domain expertise across critical industries through strategic partnerships and deep technological integration
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group glass-effect rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${domain.color} rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50`}
              >
                <domain.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {domain.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}

export default FocusDomains


