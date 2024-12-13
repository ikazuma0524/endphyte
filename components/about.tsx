"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // コンテナ全体のアニメーション設定
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // 要素ごとに0.3秒遅らせてアニメーション
      },
    },
  }

  const titleVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const leftTextVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }
    }
  }

  const rightCardVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }
    }
  }

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      {/* 背景演出 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={titleVariant}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-600 to-purple-600"
          >
            微生物の力で未来を創る
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={leftTextVariant}>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                弊社が保有するエンドファイト「Dark-septate endophyte」(DSE)は、ほぼすべての植物根に共生可能で、植物のストレス耐性向上・成長促進・花芽形成促進、そして土壌微生物の呼吸量削減を実現します。
              </p>
              <p>
                国連食糧農業機関によれば、土壌劣化は世界的な問題へと発展しています。弊社技術が持つ潜在力は、過酷な環境下でも植物を健やかに育て、食糧危機や土壌多様性喪失というグローバルな課題を包括的に解決する一助となり得ます。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={rightCardVariant} 
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 transition-transform duration-500 hover:shadow-2xl hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              独自DSE菌株による革新
            </h3>
            <p className="text-gray-700 leading-relaxed">
              弊社独自のDSE菌株は、荒廃した土壌環境下における植物生育をサポートし、農家に安定的な収量とコスト低減の機会を提供します。これにより、食糧生産の持続性向上や土壌・森林再生といった環境課題にも包括的に取り組み、人と自然が共生する豊かな未来を築きます。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
