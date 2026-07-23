import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { Hero } from '@/components/home/hero'
import { Destinations } from '@/components/home/destinations'
import { FeaturedRides } from '@/components/home/featured-rides'
import { Benefits } from '@/components/home/benefits'
import { DriverCta } from '@/components/home/driver-cta'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/home/faq'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Destinations />
        <FeaturedRides />
        <Benefits />
        <DriverCta />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
