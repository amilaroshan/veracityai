'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border-2 border-primary rounded-full"
            style={{
              width: 60 * i,
              height: 60 * i,
              marginLeft: -30 * i,
              marginTop: -30 * i,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Center logo or icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center text-2xl"
        >
          🤖
        </motion.div>
      </div>
    </div>
  )
}


