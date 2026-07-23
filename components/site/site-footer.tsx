import Link from 'next/link'
import { AtSign, Rss, Send, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/site/logo'

const columns = [
  {
    title: 'Product',
    links: ['Search rides', 'Publish a ride', 'How it works', 'Pricing', 'Mobile app'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Newsroom', 'Sustainability'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Safety', 'Cancellation', 'Contact us', 'Community'],
  },
  {
    title: 'Legal',
    links: ['Terms of service', 'Privacy policy', 'Cookie settings', 'Trust & safety'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Voya connects drivers with empty seats to passengers going the same way. Travel
              further, spend less, and share the journey.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[AtSign, Send, MessageCircle, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Voya Mobility. All rights reserved.</p>
          <p>Made for people who love the open road.</p>
        </div>
      </div>
    </footer>
  )
}
