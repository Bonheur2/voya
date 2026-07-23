import { MessageCircleQuestion } from 'lucide-react'
import { faqs } from '@/lib/placeholder-data'
import { Accordion } from '@/components/ui/accordion'
import { ButtonLink } from '@/components/ui/button-link'
import { Reveal } from '@/components/motion'

export function Faq() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            <MessageCircleQuestion className="size-3.5" />
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Questions? We have answers.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Everything you need to know about traveling and driving with Voya. Can&apos;t find what
            you&apos;re looking for?
          </p>
          <ButtonLink variant="outline" size="lg" className="mt-6" href="#">
            Visit the help center
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
