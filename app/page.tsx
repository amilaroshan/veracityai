'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Research from '@/components/Research'
import FocusDomains from '@/components/FocusDomains'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { ParticlesBackground } from '@/components/ParticlesBackground'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main ref={containerRef} className="relative min-h-screen bg-dark-900">
      <ScrollProgress />
      <BackToTop />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <Research />
      <FocusDomains />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

