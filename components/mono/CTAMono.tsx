'use client'

import { ArrowRight } from 'lucide-react'

const CTAMono = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white">
          Ready to Transform Your Business?
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Schedule a consultation with our AI experts and discover how we can accelerate your digital transformation journey
        </p>

        <button className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
          Schedule a Consultation
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

export default CTAMono

