'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const HeroMono = () => {
  const rotatingWords = [
    'Data Mining',
    'Machine Learning',
    'Deep Learning',
    'Neural Networks',
    'Data Science',
    'Computer Vision',
    'Artificial Intelligence',
  ]

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Parallax scroll effects
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex]
    const typingSpeed = isDeleting ? 50 : 100 // Faster deletion, slower typing
    const pauseTime = 2000 // Pause before deleting

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        } else {
          // Word is fully typed, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1))
        } else {
          // Word is fully deleted, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex, rotatingWords])
  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-blue-950/20 py-20 pt-24">
      {/* Video Background */}
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
        >
          <source src="/alt.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        
        {/* Subtle accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)]" />
        
        {/* Bottom blend gradient */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-b from-transparent to-[#030712]" />
      </motion.div>

      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl text-center font-semibold leading-[1.1] tracking-tight mb-8 text-white"
        >
          Discover new insights using<br />
          <span className="inline-block min-w-[300px] md:min-w-[600px] text-center">
            <span className="text-blue-400">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="inline-block w-[3px] h-[0.9em] bg-blue-400 ml-1 align-middle"
              />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto"
        >
          VeracityAI provides professional services, ground-level R&D developments, and prototyping issues in the areas of Data Science, AI, Machine Learning, Artificial Deep Learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-500 text-white rounded font-medium text-lg hover:bg-blue-600 transition-colors"
          >
            Explore Services →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border border-gray-400 text-white rounded font-medium text-lg hover:bg-gray-800 transition-colors"
          >
            Book a Discovery Call →
          </motion.button>
        </motion.div>

        {/* Tech Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
         
          <div className="relative overflow-hidden py-4">
            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] via-black/80 to-transparent z-10 pointer-events-none" />
            
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] via-black/80 to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-12 animate-scroll">
              {/* First set of logos */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div
                  key={`first-${num}`}
                  className="flex items-center justify-center px-8 py-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-800 min-w-[140px] hover:bg-white/10 transition-all group"
                >
                  <Image
                    src={`/logo/${num}.png`}
                    alt={`Partner logo ${num}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain grayscale brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div
                  key={`second-${num}`}
                  className="flex items-center justify-center px-8 py-6 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-800 min-w-[140px] hover:bg-white/10 transition-all group"
                >
                  <Image
                    src={`/logo/${num}.png`}
                    alt={`Partner logo ${num}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain grayscale brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default HeroMono

