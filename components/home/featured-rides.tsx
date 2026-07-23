import { ArrowRight } from 'lucide-react'
import { rides } from '@/lib/placeholder-data'
import { ButtonLink } from '@/components/ui/button-link'
import { SectionHeading } from '@/components/site/bits'
import { RideCard } from '@/components/site/ride-card'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

export function FeaturedRides() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Featured rides"
          title="Popular rides leaving soon"
          description="Handpicked trips from our most-loved drivers on the Lisbon → Porto route."
        />
        <ButtonLink variant="outline" size="lg" href="/search">
          View all rides
          <ArrowRight />
        </ButtonLink>
      </Reveal>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rides.slice(0, 6).map((ride) => (
          <StaggerItem key={ride.id}>
            <RideCard ride={ride} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
