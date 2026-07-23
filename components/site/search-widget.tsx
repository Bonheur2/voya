'use client'

import { MapPin, Circle, CalendarDays, Users, ArrowRight, ArrowDownUp } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { cn } from '@/lib/utils'

function Field({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode
  label: string
  value: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-1 items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/60',
        className,
      )}
    >
      <span className="text-muted-foreground">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
      </span>
    </div>
  )
}

export function SearchWidget({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/5',
        className,
      )}
    >
      <div className="flex flex-col gap-1 lg:flex-row lg:items-center">
        <Field icon={<Circle className="size-4" />} label="From" value="Lisbon" className="rounded-xl" />
        <div className="hidden h-8 w-px bg-border lg:block" />
        <div className="relative">
          <button
            type="button"
            aria-label="Swap"
            className="absolute -top-1 left-4 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-transform hover:rotate-180 hover:text-primary lg:static lg:translate-y-0"
          >
            <ArrowDownUp className="size-3.5" />
          </button>
        </div>
        <Field icon={<MapPin className="size-4" />} label="To" value="Porto" className="rounded-xl" />
        <div className="hidden h-8 w-px bg-border lg:block" />
        <Field icon={<CalendarDays className="size-4" />} label="Date" value="Fri, 14 Jun" className="rounded-xl" />
        <div className="hidden h-8 w-px bg-border lg:block" />
        <Field icon={<Users className="size-4" />} label="Seats" value="1 passenger" className="rounded-xl" />
        <ButtonLink size="lg" className="h-14 rounded-xl px-8 text-base lg:ml-1" href="/search">
          Search
          <ArrowRight />
        </ButtonLink>
      </div>
    </div>
  )
}
