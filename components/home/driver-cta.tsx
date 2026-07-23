import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { stats } from '@/lib/placeholder-data'
import { Reveal } from '@/components/motion'

const perks = [
  'Cover your fuel and toll costs on every trip',
  'Choose exactly who rides with you',
  'Publish a ride in under a minute',
  'Get paid securely, no cash needed',
]

export function DriverCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <div className="overflow-hidden rounded-3xl border border-border bg-ink text-ink-foreground">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                Become a driver
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Got empty seats? Turn them into savings.
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-foreground/70">
                Whether it is your daily commute or a weekend getaway, publish your ride and let
                Voya help cover the cost of your journey.
              </p>
              <ul className="mt-6 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <ButtonLink size="lg" className="mt-8 h-12 px-7 text-base" href="/publish">
                Publish your first ride
                <ArrowRight />
              </ButtonLink>
            </Reveal>
          </div>
          <div className="relative h-72 lg:h-full lg:min-h-[26rem]">
            <Image
              src="/images/driver-promo.png"
              alt="A Voya driver next to their car"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} className="text-center">
            <div className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
