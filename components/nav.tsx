"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react" // ハンバーガーアイコン用

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#about", label: "About Us" },
    { href: "#business", label: "Our Business" },
    { href: "#news", label: "News" },
    { href: "#teams", label: "Team" },
    { href: "#company-info", label: "Company" },
    { href: "#recruit", label: "Careers" },
 
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-transparent shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-KS3M92ObRPnKCWLGUULfpo5LNFHxpM.webp"
            alt="Endophyte Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-green-800">
            endophyte
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="relative text-gray-700 font-medium hover:text-green-700 transition-colors"
            >
              <span className="pb-1">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center text-gray-700 hover:text-green-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6"/>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed top-16 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-xl px-4 py-6 flex flex-col space-y-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-gray-700 font-semibold hover:text-green-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
