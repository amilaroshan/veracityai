'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
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
            Client <span className="text-gradient">Testimonials</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative glass-effect rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Image side */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-96 md:h-auto rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Professional testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
              
              {/* Quote icon overlay */}
              <div className="absolute top-6 left-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Content side */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-semibold text-gradient mb-2">wenn</h3>
                  <div className="flex gap-1 text-yellow-400 text-xl mb-4">
                    {'★★★★★'}
                  </div>
                </div>
                
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                >
                  "VeracityAI transformed our business with their cutting-edge AI solutions. Their team delivered a sophisticated, large-scale chatbot that exceeded all expectations. The product development process was seamless, and their performance measurement systems are truly world-class. We're thrilled with the results and look forward to future collaborations."
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-sm text-gray-400"
                >
                  <div className="font-semibold text-white mb-1">ROBERT M WINER</div>
                  <div>CEO</div>
                </motion.div>
              </motion.div>

              {/* Navigation buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-4 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 180, 216, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-primary/50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 180, 216, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-primary/50 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials


