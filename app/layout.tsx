import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VeracityAI - Discover New Insights Using Data Mining',
  description: 'VeracityAI provides professional services, product design and developments, and prototyping solutions in the areas of Data Science, AI, Machine Learning and IoT.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

