'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Is my data safe with your platform?',
    answer: 'Yes, we use enterprise-grade encryption and security measures to protect your data.',
  },
  {
    question: 'What kind of customer support do you offer?',
    answer: '24/7 support via email, chat, and phone with dedicated account managers for enterprise clients.',
  },
  {
    question: 'How does the pricing for your web solution work?',
    answer: 'Flexible pricing based on usage, with plans for startups, businesses, and enterprises.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel anytime with no penalties or hidden fees.',
  },
  {
    question: 'Can I upgrade or downgrade my subscription plan?',
    answer: 'Absolutely! You can change your plan at any time to match your needs.',
  },
]

const FAQMono = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold mb-4 text-white">We've got answers</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg font-medium text-left text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-2xl text-white" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQMono

