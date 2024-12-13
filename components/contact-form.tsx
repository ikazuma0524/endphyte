"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // ここでフォーム送信のロジックを実装
    setTimeout(() => setIsSubmitting(false), 1000)
  }

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
      id="contact" 
      className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
      ref={ref}
    >
      {/* 背景演出用の円形グラデーション */}
      <div className="pointer-events-none absolute w-[800px] h-[800px] bg-gradient-to-tr from-green-300 via-blue-300 to-purple-300 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">
          お問い合わせ
        </h2>
        
        <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前
              </label>
              <Input 
                id="name" 
                required 
                placeholder="お名前を入力してください"
                className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="example@example.com"
                className="transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ内容
              </label>
              <Textarea 
                id="message"
                required 
                className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="ご質問やご要望、連絡事項などをお書きください。"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 font-bold text-white bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 hover:scale-105 transition-transform duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
