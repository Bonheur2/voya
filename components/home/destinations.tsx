import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { destinations } from '@/lib/placeholder-data'
import { SectionHeading } from '@/components/site/bits'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

export function Destinations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Popular routes"
          title="Where do you want to go?"
          description="Thousands of rides are published every day across the most-traveled routes in the region."
        />
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {destinations.map((d) => (
          <StaggerItem key={d.city}>
            <Link
              href="/search"
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-sm"
            >
              <Image
                src={d.image}
                alt={`${d.city}, ${d.country}`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-xs font-medium opacity-80">{d.country}</div>
                <div className="text-xl font-bold">{d.city}</div>
                <div className="mt-1 flex items-center justify-between text-xs">
                  <span className="opacity-90">{d.rides} rides today</span>
                  <span className="inline-flex items-center gap-1 font-semibold">
                    from €{d.from}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
