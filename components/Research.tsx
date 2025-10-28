'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BarChart3, Microscope, Target } from 'lucide-react'
import Image from 'next/image'

const publications = [
  {
    title: 'Data Analytics and Machine Learning Technologies',
    description: 'Strategic growth insights powered by AI',
    details: 'Identify potential markets and emerging opportunities using advanced machine learning algorithms and predictive analytics for data-driven decision making.',
    gradient: 'from-purple-600 to-blue-600',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '#',
  },
  {
    title: 'Predictive Models for Healthcare Innovation',
    description: 'Advanced healthcare analytics',
    details: 'Partnering with healthcare providers to develop cutting-edge predictive models that optimize patient outcomes and streamline clinical operations.',
    gradient: 'from-blue-600 to-cyan-600',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '#',
  },
  {
    title: 'Multi-Agent Reinforcement Learning Systems',
    description: 'Next-generation recommendation engines',
    details: 'Sophisticated recommendation systems using deep reinforcement learning and collaborative filtering for enhanced user experiences and engagement.',
    gradient: 'from-cyan-600 to-teal-600',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    link: '#',
  },
]

const Research = () => {
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
            Recent research <span className="text-gradient">publication</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Premium Image with Icon Overlay */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-56 overflow-hidden"
              >
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-60`} />
                
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                  >
                    <pub.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{pub.description}</p>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{pub.details}</p>
                <motion.a
                  href={pub.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research


