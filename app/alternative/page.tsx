'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import NavbarAlt from '@/components/alternative/NavbarAlt'
import HeroAlt from '@/components/alternative/HeroAlt'
import ServicesAlt from '@/components/alternative/ServicesAlt'
import ShowcaseAlt from '@/components/alternative/ShowcaseAlt'
import CTAAlt from '@/components/alternative/CTAAlt'
import FooterAlt from '@/components/alternative/FooterAlt'

export default function Alternative() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-white">
      <NavbarAlt />
      <HeroAlt />
      <ServicesAlt />
      <ShowcaseAlt />
      <CTAAlt />
      <FooterAlt />
    </main>
  )
}


