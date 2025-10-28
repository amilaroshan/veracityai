'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BarChart3, Microscope, Target } from 'lucide-react'
import Image from 'next/image'

const showcases = [
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

const ShowcaseMono = () => {
  const ref = useRef(null)

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-6 text-white">
            Recent research publication
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our latest breakthroughs in AI research and discover how we're pushing the boundaries of machine learning innovation
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {showcases.map((item, index) => (
            <div
              key={item.title}
              className="group bg-gray-900/60 backdrop-blur-lg rounded-2xl overflow-hidden"
            >
              {/* Premium Image with Icon Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60`} />
                
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 text-md leading-relaxed">{item.description}</p>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.details}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseMono

