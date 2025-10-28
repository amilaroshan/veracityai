'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <motion.h1
            animate={{
              textShadow: [
                '0 0 20px rgba(0, 180, 216, 0.5)',
                '0 0 40px rgba(0, 180, 216, 0.8)',
                '0 0 20px rgba(0, 180, 216, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl font-semibold text-gradient mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered into the digital void.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 180, 216, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light rounded-lg font-semibold flex items-center gap-2 hover:shadow-xl transition-all"
            >
              <FiHome />
              Go Home
            </motion.button>
          </Link>
          
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect rounded-lg font-semibold flex items-center gap-2 hover:border-primary/50 transition-all"
          >
            <FiArrowLeft />
            Go Back
          </motion.button>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"
        />
      </div>
    </div>
  )
}


