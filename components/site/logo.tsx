import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
  href = '/',
}: {
  className?: string
  showText?: boolean
  href?: string
}) {
  return (
    <Link href={href} className={cn('inline-flex items-center gap-2', className)}>
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
          <path
            d="M5 17c0-2 1.5-3 3.5-3S12 15 12 15s2-1 3.5-1 3.5 1 3.5 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="7" cy="8" r="2.4" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="8" r="2.4" fill="currentColor" />
        </svg>
      </span>
      {showText && (
        <span className="text-xl font-extrabold tracking-tight text-foreground">Voya</span>
      )}
    </Link>
  )
}
