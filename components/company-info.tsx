"use client"

import {  CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, MapPin} from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { Briefcase, FlaskConical, Leaf, Factory } from "lucide-react"

export function CompanyInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section 
      id="company-info" 
      className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden" 
      ref={ref}
    >
      {/* 背景演出 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-tr from-green-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">
            Company
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl rounded-xl p-8 md:p-12"
        >
          <CardHeader className="text-center mb-8">
            <CardTitle className="text-2xl font-semibold text-gray-800">株式会社エンドファイト</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <div className="flex items-center space-x-4">
              <Building className="w-6 h-6 text-green-600" />
              <span>設立日：2023年4月13日</span>
            </div>
            <div className="flex items-center space-x-4">
              <Leaf className="w-6 h-6 text-green-600" />
              <span>代表取締役：風岡 俊希</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-green-600" />
              <span>本社：東京都千代田区富士見1-3-11 富士見デュープレックスビズ4階</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-green-600" />
              <span>ラボ：茨城県稲敷郡阿見町中央3-21-1 茨城大学農学部</span>
            </div>
            <div className="flex items-center space-x-4">
              <Briefcase className="w-6 h-6 text-green-600" />
              <span>資本金：1,000,000円</span>
            </div>

            <hr className="border-gray-300" />

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">事業内容</h3>
              <div className="flex items-center space-x-4">
                <Factory className="w-6 h-6 text-green-600" />
                <span>土壌微生物資材の開発</span>
              </div>
              <div className="flex items-center space-x-4">
                <FlaskConical className="w-6 h-6 text-green-600" />
                <span>微生物を活用した新規農法開発支援</span>
              </div>
              <div className="flex items-center space-x-4">
                <Leaf className="w-6 h-6 text-green-600" />
                <span>微生物を活用した緑化支援</span>
              </div>
              <div className="flex items-center space-x-4">
                <Building className="w-6 h-6 text-green-600" />
                <span>新規事業コンサルティング</span>
              </div>
            </div>
          </CardContent>
        </motion.div>
      </div>
    </section>
  )
}
