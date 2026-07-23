import Image from 'next/image'
import { ShieldCheck, Star, Leaf } from 'lucide-react'
import { SearchWidget } from '@/components/site/search-widget'
import { Avatar } from '@/components/ui/avatar'
import { Reveal } from '@/components/motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-24 top-40 size-[24rem] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
              <Leaf className="size-3.5 text-success" />
              18 million members sharing the ride
            </span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Share the ride, <span className="text-primary">split the cost</span>
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Find affordable rides to hundreds of destinations, or fill your empty seats and turn
              every trip into a shared journey. Trusted, verified, and refreshingly simple.
            </p>

            <div className="mt-7 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {['/images/avatar-2.png', '/images/avatar-4.png', '/images/avatar-6.png', '/images/avatar-3.png'].map(
                    (src) => (
                      <Avatar key={src} src={src} alt="Member" size={36} ring className="ring-background" />
                    ),
                  )}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 font-semibold text-foreground">
                    <Star className="size-3.5 fill-warning text-warning" /> 4.9/5
                  </div>
                  <span className="text-muted-foreground">from 240k reviews</span>
                </div>
              </div>
              <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
                <ShieldCheck className="size-4 text-success" />
                ID-verified drivers
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/10">
              <Image
                src="/images/hero-roadtrip.png"
                alt="Friends enjoying a road trip together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
              <div className="text-xs text-muted-foreground">You save on avg.</div>
              <div className="text-2xl font-extrabold text-foreground">€ 42 / trip</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-10 lg:-mt-4">
          <SearchWidget />
        </Reveal>
      </div>
    </section>
  )
}
