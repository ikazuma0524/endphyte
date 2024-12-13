"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Sprout, Users } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

export function Business() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const businesses = [
    {
      title: "エンドファイト培土",
      description: "エンドファイト技術を用いた育苗用培土",
      content: "植物のストレス耐性向上、有機体窒素・リン酸吸収促進、花芽形成促進効果をもたらし、通常では栽培困難な条件下における有機農業を可能にします。",
      icon: Leaf,
    },
    {
      title: "エンドファイト苗",
      description: "エンドファイト培土上で生育した高付加価値苗",
      content: "通常では栽培困難な条件下における有機農業が可能となるとともに、収穫量、食味を向上させます。",
      icon: Sprout,
    },
    {
      title: "新規事業共創支援",
      description: "オープンイノベーションを通じた新規事業共創支援",
      content: "次世代のバイオ資材開発、都市の緑化、植物工場、土壌・森林再生事業等を行う企業に対して技術提供および弊社ネットワークを活用した新規グリーン事業共創支援を行います。",
      icon: Users,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } 
    }
  }

  const iconVariants = {
    hidden: { rotate: -45, scale: 0.8, opacity: 0 },
    visible: { 
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section 
      ref={ref}
      id="business" 
      className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 w-[1000px] h-[1000px] blur-3xl opacity-10 rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.h2 
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-purple-600"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          BUSINESS
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {businesses.map((business, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl hover:scale-[1.03] transform-gpu transition-all duration-500"
              >
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.div variants={iconVariants} className="mr-3">
                      <business.icon className="h-12 w-12 text-green-700" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-800">{business.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {business.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 leading-relaxed">{business.content}</p>
                </CardContent>
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-green-200 to-blue-200 opacity-30 blur-2xl rounded-full" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
