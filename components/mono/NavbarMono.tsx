'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const NavbarMono = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="sticky top-0 z-50 pt-4 px-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-[95%] lg:max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-md shadow-lg border border-gray-200"
        >
          <div className="px-6 lg:px-4">
            <div className="flex justify-between items-center h-14">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/veracity-logo.png"
                    alt="VeracityAI"
                    width={150}
                    height={40}
                    className="h-7 w-auto"
                  />
                </motion.div>
              </Link>

              {/* Center Menu */}
              <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
                {['Case Studies', 'Innovation Center', 'About'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ y: -2 }}
                    className="text-base text-gray-700 hover:text-black font-normal transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Contact Button */}
              <motion.a
                href="#contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black text-white text-sm rounded-md font-normal hover:bg-gray-800 transition-colors"
              >
                Contact us
              </motion.a>
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  )
}

export default NavbarMono

