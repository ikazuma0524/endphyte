import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Business } from "@/components/business"
import { Teams } from "@/components/teams"
import { CompanyInfo } from "@/components/company-info"
import { Recruit } from "@/components/recruit"
import { News } from "@/components/news"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Business />
      <News />
      <Teams />
    
      <Recruit />
    
      <ContactForm />
      <CompanyInfo />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>©株式会社エンドファイト All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}

