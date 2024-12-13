"use client"

import { useState, useEffect } from 'react'

interface TypewriterProps {
  text: string
  delay?: number
  keepDisplayed?: boolean
}

export function Typewriter({ text, delay = 100, keepDisplayed = false }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (!keepDisplayed) {
      setIsComplete(true)
      const resetTimeout = setTimeout(() => {
        setCurrentText("''")
        setCurrentIndex(0)
        setIsComplete(false)
      }, 2000) // 2 second pause before restarting

      return () => clearTimeout(resetTimeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, delay, text, keepDisplayed])

  return <span className={`font-bold ${isComplete ? "'border-r-2 border-transparent'" : "'border-r-2 border-white animate-pulse'"}`}>{currentText}</span>
}

