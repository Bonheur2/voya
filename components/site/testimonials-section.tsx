import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  location: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Carpooling's great: I pay a little money to get where I'm going on time, in comfort, and in AC! And I know it's nice for the driver to get a little financial help when they're travelling alone.",
    author: 'Amit',
    location: 'from Pune',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
  },
  {
    quote: 'What I love most is the reliability and the community feel. Every driver is carefully verified, and the support team is incredibly responsive. I now prefer carpooling over other options.',
    author: 'Sarah',
    location: 'from London',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
  },
]

const stats = {
  members: '30 million',
  years: '20 years',
  description: 'Join the world's #1 carpooling community, trusted by 30 million members worldwide. For 20 years, we've helped locals share rides, save money and travel with confidence. And if you need us, our responsive support team is here to help. So, where will you go?',
}

export function TestimonialsSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      {/* First Testimonial - Image Right */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              Only on Voya...
            </h2>
            <blockquote className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              <p className="italic">"{testimonials[0].quote}"</p>
            </blockquote>
            <p className="font-semibold text-foreground">{testimonials[0].author}, <span className="font-normal text-muted-foreground">{testimonials[0].location}</span></p>
          </div>
          <div className="relative h-72 sm:h-96">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-72 sm:h-96 order-last lg:order-first">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Carpooling community"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              {stats.members} members. {stats.years}' experience.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {stats.description}
            </p>
          </div>
        </div>
      </div>

      {/* Second Testimonial - Image Left */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-72 sm:h-96">
            <img
              src={testimonials[1].image}
              alt={testimonials[1].author}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Quote className="size-6 text-primary" />
            </div>
            <blockquote className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              <p className="italic">"{testimonials[1].quote}"</p>
            </blockquote>
            <p className="font-semibold text-foreground">{testimonials[1].author}, <span className="font-normal text-muted-foreground">{testimonials[1].location}</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
