'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[]
  className?: string
  defaultOpen?: number | null
}) {
  const [open, setOpen] = React.useState<number | null>(defaultOpen)

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.q}
            className={cn(
              'rounded-2xl border bg-card transition-colors',
              isOpen ? 'border-primary/40' : 'border-border',
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-foreground">{item.q}</span>
              <ChevronDown
                className={cn(
                  'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                  isOpen && 'rotate-180 text-primary',
                )}
              />
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
