import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { RoutesCoverageSection } from "@/components/routes-coverage-section"
import { TeamSection } from "@/components/team-section"
// import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ClientsSection } from "@/components/clients-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <RoutesCoverageSection />
        <TeamSection />
        <ContactSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  )
}
