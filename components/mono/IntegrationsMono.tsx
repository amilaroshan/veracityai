'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const IntegrationsMono = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <motion.div 
        style={{ y, scale }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold mb-6 text-white">
            Our focus domains
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Focused on key industries to develop domain knowledge users through partnerships
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-12 max-w-4xl mx-auto">
            {[
              { icon: '📄', label: 'Banking and Finance' },
              { icon: '📊', label: 'Capital Markets' },
              { icon: '🏭', label: 'Manufacturing and Logistics' },
              { icon: '🛡️', label: 'Insurance' },
              { icon: '📡', label: 'Telecommunications' },
              { icon: '⚕️', label: 'Healthcare' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <p className="text-sm text-gray-300 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default IntegrationsMono

