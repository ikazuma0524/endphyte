"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

const teamMembers = [
  {
    name: "風岡 俊希",
    nameEn: "Toshiki Kazaoka",
    role: "共同創業者　代表取締役兼CEO",
    image: "/kazaoka.jpg", 
    description: `外資・内資系コンサルティングファームにおいて産官学の新規事業戦略立案、実行支援に従事。その後、創薬ベンチャーの経営企画、大手IT企業のアフリカにおける事業立ち上げ支援、政府系VCにおける大学発スタートアップの投資、創業・経営支援や自治体のスタートアップエコシステム構築支援を経て、エンドファイトの代表取締役兼CEOに就任。`
  },
  {
    name: "成澤 才彦",
    nameEn: "Narisawa Kazuhiko",
    role: "共同創業者　取締役兼CTO",
    image: "/narisawa.jpg", 
    description: `学位取得後、カナダ・アルバータ大学でポスドクを経て、茨城県生物工学研究所、現在は茨城大学農学部 食生命科学科教授としてエンドファイト（植物内生菌）を活用した次世代の農法スタイル構築の研究に従事。本領域の第一人者として、エンドファイトを創業、取締役兼CTOに就任。Dark Septate Endophytes (DSE) の研究に注力。`
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

export function Teams() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section 
      id="teams" 
      className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-green-300 via-blue-300 to-purple-300 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">
          Our Team
        </h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="relative bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl hover:scale-[1.02] transform-gpu transition-transform duration-500 overflow-hidden">
                <CardHeader className="p-0 relative">
                  {/* 大きな横長画像 */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-[50vh] object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-8 text-center">
                    <CardTitle className="text-2xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </CardTitle>
                    <span className="text-sm text-gray-500 mb-4 block italic">{member.nameEn}</span>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-8 text-gray-700 leading-relaxed">
                  <p>{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
