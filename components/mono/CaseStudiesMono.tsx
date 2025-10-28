'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const caseStudies = [
  {
    client: 'SmartAIConnect',
    title: 'Development of SmartAIConnect Responsible AI Framework by Veracity Digital',
    description: 'Smart AI, a pioneer in AI-powered security solutions, collaborated with Veracity Digital to develop a backend platform to support its AI-powered camera systems.',
    image: '/casestudy/1.jpg',
  },
  {
    client: 'SG Innovate',
    title: 'Transforming Posture Health: The Kuushy Companion App',
    description: 'Utilizing advanced sensor technology and artificial intelligence. This application offers real-time posture analysis and feedback, guiding users towards healthier sitting habits.',
    image: '/casestudy/2.jpg',
  },
]

const CaseStudiesMono = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Customer Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Learn how Veracity unlocks smoother collaboration
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.client}
              className="group bg-gray-900/60 backdrop-blur-lg rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-sm font-medium text-blue-400 mb-3 block">
                  {study.client}
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {study.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-medium"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesMono

