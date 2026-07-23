import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/placeholder-data'
import { Avatar } from '@/components/ui/avatar'
import { RatingStars, SectionHeading } from '@/components/site/bits'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Testimonial 1 - Image Right */}
        <Reveal>
          <div className="mb-20 grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Only on Voya...
              </h2>
              <blockquote className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                <p className="italic">"{testimonials[0]?.quote || 'Experience the best way to travel.'}"</p>
              </blockquote>
              <p className="font-semibold text-foreground">
                {testimonials[0]?.name}
                <span className="font-normal text-muted-foreground"> — {testimonials[0]?.role}</span>
              </p>
            </div>
            <div className="relative h-72 sm:h-96 bg-muted overflow-hidden">
              <img
                src={testimonials[0]?.avatar}
                alt={testimonials[0]?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Stats Section */}
        <Reveal>
          <div className="mb-20 grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-72 sm:h-96 bg-muted overflow-hidden order-last lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                alt="Carpooling community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                30 million members. 20 years' experience.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Join the world's #1 carpooling community, trusted by 30 million members worldwide. For 20 years, we've helped locals share rides, save money and travel with confidence. And if you need us, our responsive support team is here to help. So, where will you go?
              </p>
            </div>
          </div>
        </Reveal>

        {/* Testimonial Grid */}
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">From our community</h3>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(1, 4).map((t) => (
              <StaggerItem key={t.name}>
                <figure className="flex h-full flex-col border border-border bg-card p-6">
                  <Quote className="size-8 text-primary/30" />
                  <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <RatingStars rating={t.rating} showValue={false} className="mt-4" />
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <Avatar src={t.avatar} alt={t.name} size={40} />
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}
