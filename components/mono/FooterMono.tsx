'use client'

import { motion } from 'framer-motion'
import { FiInstagram, FiYoutube, FiLinkedin, FiTwitter } from 'react-icons/fi'

const FooterMono = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-semibold mb-4">
              Veracity<span className="text-primary">AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Speed, scale, and smarts — deployed.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About', 'Pricing', 'Changelog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Terms of service', 'Privacy policy', '404'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {[FiInstagram, FiYoutube, FiLinkedin, FiTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VeracityAI. All rights reserved</p>
          <p>Made with ❤️ by Dream Studio</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterMono

