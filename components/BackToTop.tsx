'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export const BackToTop = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      style={{ opacity, scale }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 180, 216, 0.6)' }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow"
      aria-label="Back to top"
    >
      <FiArrowUp className="text-2xl text-white" />
    </motion.button>
  )
}


