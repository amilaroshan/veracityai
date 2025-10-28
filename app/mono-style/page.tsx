'use client'

import { useEffect, useState } from 'react'
import NavbarMono from '@/components/mono/NavbarMono'
import HeroMono from '@/components/mono/HeroMono'
import FeaturesMono from '@/components/mono/FeaturesMono'
import ShowcaseMono from '@/components/mono/ShowcaseMono'
import CaseStudiesMono from '@/components/mono/CaseStudiesMono'
import TestimonialsMono from '@/components/mono/TestimonialsMono'
import IntegrationsMono from '@/components/mono/IntegrationsMono'
import CTAMono from '@/components/mono/CTAMono'
import FooterMono from '@/components/mono/FooterMono'
import Footer from '@/components/Footer'

export default function MonoStyle() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-black">
      <NavbarMono />
      <HeroMono />
      <FeaturesMono />
      <ShowcaseMono />
      <CaseStudiesMono />
      <TestimonialsMono />
      {/* <IntegrationsMono /> */}
      <CTAMono />
      <Footer />
    </main>
  )
}

