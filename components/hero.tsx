"use client"

import { useRef, useEffect } from 'react'
import { Typewriter } from './typewriter'
import { motion } from 'framer-motion'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  // モバイルで改行を行いたいテキスト
  const mainText = "すべての土壌に命を吹き込む"

  // 「すべての土壌に」までと「命を吹き込む」で分割
  const mobileLine1 = "すべての土壌に"
  const mobileLine2 = "命を吹き込む"

  return (
    <div className="relative h-screen flex items-center justify-start">
      {/* 背景動画 */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20241214_0248_Microbial%20Rebirth_simple_compose_01jf0j5036fed9z324s5ppdg49-Zxvk5f89DOPPwdyD17U5jbPiXwh3j1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* オーバーレイ（グラデーション） */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

      {/* テキストコンテナ（左揃え） */}
      <motion.div 
        className="relative z-10 text-left px-4 pl-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 whitespace-nowrap drop-shadow-md">
          {/* モバイルで改行するため、2行にTypewriterを分割 */}
          <span className="block md:inline">
            <Typewriter
              text={mobileLine1}
              delay={100}
              keepDisplayed={true} 
            />
          </span>
          <br className="block md:hidden" />
          <span className="block md:inline">
            <Typewriter
              text={mobileLine2}
              delay={100}
              keepDisplayed={true} 
            />
          </span>
        </h1>
        
        {/* 以下の行はmd以上で表示（モバイルでは非表示） */}
        <p className="hidden md:block text-white text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap drop-shadow-md mb-2">
          <Typewriter
            text="2050年、世界の90％以上の土壌が劣化し、生物多様性が消えゆく現実。"
            delay={100}
            keepDisplayed={true}
          />
        </p>
        <p className="hidden md:block text-white text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap drop-shadow-md mb-2">
          <Typewriter
            text="微生物エンドファイト（DSE）が拓く、過酷な環境下で甦る大地。"
            delay={100}
            keepDisplayed={true}
          />
        </p>
        <p className="hidden md:block text-white text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap drop-shadow-md mb-2">
          <Typewriter
            text="植物を強靭に育み、土壌を再生し、食糧を守り、緑の息吹を取り戻す。"
            delay={100}
            keepDisplayed={true}
          />
        </p>
        <p className="hidden md:block text-white text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap drop-shadow-md">
          <Typewriter
            text="革新的な微生物テクノロジーが、土壌から未来を創る。"
            delay={100}
            keepDisplayed={true}
          />
        </p>
      </motion.div>
    </div>
  )
}
