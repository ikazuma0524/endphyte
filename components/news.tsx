export function News() {
  const news = [
    { date: "2024.06.27", content: <a href="https://www.sanrenhonbu.tsukuba.ac.jp/news20240627/" target="_blank" rel="noopener noreferrer">筑波大学発ベンチャー称号を獲得いたしました</a> },
    { date: "2024.06.14", content: <a href="https://poc-ground.metro.tokyo.lg.jp/report/2024-poc-ground-tokyo-result/" target="_blank" rel="noopener noreferrer">リバネス・フォレスト・プロジェクトへ採択。キヤノンマーケティングジャパン株式会社と連携開始</a> },
    { date: "2024.06.13", content: <a href="https://poc-ground.metro.tokyo.lg.jp/report/2024-poc-ground-tokyo-result/" target="_blank" rel="noopener noreferrer">東京都スタートアップ社会実装支援事業「PoC Ground Tokyo」へ採択</a> },
    { date: "2024.02.22", content: <a href="https://tsubasa-jica.com/news/531/" target="_blank" rel="noopener noreferrer">JICA×IDB主催の中南米展開支援アクセラレータープログラム「TUSUBASA 2024」へ採択</a> },
    { date: "2024.02.03", content: <a href="https://prtimes.jp/main/html/rd/p/000001683.000016751.html" target="_blank" rel="noopener noreferrer">農林水産省フードテック官民協議会主催の「フードテックビジネスコンテスト」にて最優秀賞を受賞</a> },
    { date: "2024.01.29", content: <a href="https://www.city.toyohashi.lg.jp/secure/102024/r60105.pdf" target="_blank" rel="noopener noreferrer">豊橋市アグリテックコンテストにて優秀賞を受賞</a> },
    { date: "2024.01.17", content: <a href="https://pdf.irpocket.com/C0060/ZoWa/snGB/dXJq.pdf" target="_blank" rel="noopener noreferrer">めぶきビジネスアワードにて大学発イノベーション賞を受賞</a> },
    { date: "2023.11.10", content: <a href="https://www.env.go.jp/press/press_02390.html" target="_blank" rel="noopener noreferrer">環境省主催の「2030生物多様性枠組実現日本会議(J-GBF) 第３回ビジネスフォーラム」に参加</a> },
    { date: "2023.09.26", content: <a href="https://j-starx.jp/" target="_blank" rel="noopener noreferrer">代表の風岡が経済産業省が主催する「J-StarX」インドネシア・シンガポールプログラムに採択</a> },
    { date: "2023.09.16", content: <a href="https://lne.st/2023/09/20/atg2023/" target="_blank" rel="noopener noreferrer">リバネス主催のアグリテックグランプリ2023において最優秀賞受賞</a> },
    { date: "2023.09.13", content: <a href="https://www.jetro.go.jp/news/releases/2023/0583d34d91103c3d.html" target="_blank" rel="noopener noreferrer">海外展開アクセラレーションプログラムGSAP「Berkeley SKYDECK」に採択</a> },
    { date: "2023.09.04", content: <a href="https://ipbase.go.jp/news/2023/09/news-0904-2.php" target="_blank" rel="noopener noreferrer">特許庁アクセラレーションプログラム「IPAS」へ採択</a> },
    { date: "2023.08.21", content: <a href="https://www.pref.ibaraki.jp/shokorodo/sangi/05ventureseityop_kickoff.html" target="_blank" rel="noopener noreferrer">令和５年度茨城県ベンチャー企業成長促進事業へ採択</a> },
    { date: "2023.08.09", content: <a href="https://www.fipo.or.jp/news/25354" target="_blank" rel="noopener noreferrer">令和５年度「Fukushima Tech Create」ビジネスアイデア事業化プログラム採択</a> },
    { date: "2023.08.07", content: <a href="http://lne.st/2023/08/07/sea202308/" target="_blank" rel="noopener noreferrer">リバネス・JETRO主催のASEAN進出支援プログラムへ採択</a> },
    { date: "2023.07.25", content: <a href="https://www.jetro.go.jp/biznews/2023/08/81cbec677ab37476.html" target="_blank" rel="noopener noreferrer">アグリ・フードテック・ミートアップ2023にて明治ホールディングス賞を受賞</a> },
    { date: "2023.07.14", content: <a href="https://bunkyodezi.com/university/722/" target="_blank" rel="noopener noreferrer">茨城大学農学部キャンパスにおいて、大学発ベンチャー称号授与式を開催</a> },
    { date: "2023.03.15", content: <a href="https://www.1stround.jp/achievement/" target="_blank" rel="noopener noreferrer">東大IPCの起業支援プログラム、第8回「1st Round」の支援先へ採択</a> },
  ];

  return (
    <section id="news" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">
          News
        </h2>
        <div className="relative">
          {/* タイムライン用の縦線 */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500 opacity-30"></div>

          <div className="space-y-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="relative md:pl-20 ml-8 md:ml-0 transition-all duration-300 hover:bg-white hover:bg-opacity-50 hover:shadow-lg hover:scale-[1.01] rounded-lg p-4"
                style={{
                  ...(index % 2 === 0
                    ? { marginLeft: '0', marginRight: 'auto', textAlign: 'left', maxWidth: '700px' }
                    : { marginLeft: 'auto', marginRight: '0', textAlign: 'left', maxWidth: '700px' }
                  )
                }}
              >
                {/* タイムラインマーカー */}
                <div className="absolute -left-4 md:-left-0 md:transform md:-translate-x-1/2 top-5 bg-green-500 w-8 h-8 rounded-full border-4 border-white shadow"></div>
                
                <time className="block text-gray-500 font-medium mb-2 text-sm md:text-base">
                  {item.date}
                </time>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
