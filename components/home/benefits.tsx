import { Search, CalendarCheck, Car, Wallet, ShieldCheck, Leaf } from 'lucide-react'
import { SectionHeading } from '@/components/site/bits'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { Card } from '@/components/ui/card'

const steps = [
  {
    icon: Search,
    title: 'Search your route',
    text: 'Enter where you are leaving from and where you are going, pick a date, and browse rides.',
  },
  {
    icon: CalendarCheck,
    title: 'Book in a tap',
    text: 'Choose the ride that fits your schedule and budget. Instant booking gets you confirmed right away.',
  },
  {
    icon: Car,
    title: 'Meet & travel',
    text: 'Meet your driver at the pickup point and enjoy a comfortable, affordable journey together.',
  },
]

const benefits = [
  {
    icon: Wallet,
    title: 'Save on every trip',
    text: 'Split fuel and tolls so everyone pays less. Members save an average of 38% versus traveling alone.',
  },
  {
    icon: ShieldCheck,
    title: 'Travel with confidence',
    text: 'Verified IDs, ratings, and reviews mean you always know exactly who you are traveling with.',
  },
  {
    icon: Leaf,
    title: 'Better for the planet',
    text: 'Every shared seat means one less car on the road. Small choices, meaningful impact.',
  },
]

export function Benefits() {
  return (
    <section id="how" className="bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Your next ride in three simple steps"
            description="No complicated sign-ups, no hidden fees. Just a smarter, friendlier way to travel."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <Card className="relative h-full p-6">
                <span className="absolute right-5 top-5 text-5xl font-black text-muted/70">
                  {i + 1}
                </span>
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Why Voya"
              title="Built around trust and value"
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
