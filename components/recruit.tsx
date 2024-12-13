"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Recruit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section 
      id="recruit" 
      className="relative py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 mb-6">
            微生物の力で世界を変える事業開発インターン募集
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            荒廃土壌の再生・高付加価値化を目指す。  
            食糧危機、環境破壊、脱炭素化といった世界的課題に挑み、新規事業をリードするチャンス。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl rounded-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed">
            <p><span className="font-semibold">勤務場所：</span>フルリモート、東京(虎ノ門)、茨城大学農学部、シンガポール、マレーシア</p>
            <p><span className="font-semibold">待遇：</span>無料（勤務体系に応じ要相談）</p>
            <p><span className="font-semibold">対象：</span>大学生・専門学生（学部不問）</p>
            <p><span className="font-semibold">勤務頻度・期間：</span>相談可</p>
            <p><span className="font-semibold">活動内容：</span>  
               ・アクセラレータープログラムを通じた新規事業開発サポート<br/>
               ・マーケティング戦略策定サポート<br/>
               ・広報・プロモーション（営業、人材採用）サポート
            </p>
            <p><span className="font-semibold">求める人物像：</span><br/>
               ・エンドファイトの理念・ミッションに共感<br/>
               ・食糧危機解消、土壌・森林再生、カーボンニュートラル等に関心<br/>
               ・能動的で当事者意識が高く、ゼロベース思考で動ける<br/>
               ・地道な努力を惜しまない姿勢
            </p>
            <p><span className="font-semibold">ポイント：</span><br/>
               ・VC、コンサル出身の代表が全面サポート<br/>
               ・海外アクセラレータープログラム等への参加機会<br/>
               ・創業期大学発ベンチャーで経営全体の経験獲得
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button 
              className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a href="https://activo.jp/articles/99591" target="_blank" rel="noopener noreferrer">
                応募する
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

