'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, PlusCircle, Bell } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { Avatar } from '@/components/ui/avatar'
import { Logo } from '@/components/site/logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Search rides', href: '/search' },
  { label: 'Publish a ride', href: '/publish' },
  { label: 'How it works', href: '/#how' },
  { label: 'Dashboard', href: '/dashboard' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink variant="ghost" size="icon-lg" aria-label="Notifications" href="/notifications">
            <Bell />
          </ButtonLink>
          <ButtonLink variant="outline" href="/publish">
            <PlusCircle />
            Publish a ride
          </ButtonLink>
          <div className="h-6 w-px bg-border" />
          <ButtonLink variant="ghost" href="/auth/login">
            Log in
          </ButtonLink>
          <ButtonLink href="/auth/signup">
            Sign up
          </ButtonLink>
          <Link href="/dashboard" aria-label="Your profile">
            <Avatar src="/images/avatar-1.png" alt="Your profile" size={36} className="ring-2 ring-border" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/70 bg-background lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
        style={{ transition: 'max-height 0.3s ease' }}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {link.label === 'Search rides' && <Search className="size-4" />}
              {link.label === 'Publish a ride' && <PlusCircle className="size-4" />}
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <ButtonLink variant="outline" className="flex-1" href="/login" onClick={() => setOpen(false)}>
              Log in
            </ButtonLink>
            <ButtonLink className="flex-1" href="/signup" onClick={() => setOpen(false)}>
              Sign up
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
