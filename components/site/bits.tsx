import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RatingStars({
  rating,
  size = 14,
  showValue = true,
  reviews,
  className,
}: {
  rating: number
  size?: number
  showValue?: boolean
  reviews?: number
  className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      <span className="inline-flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className={cn(
              i < Math.round(rating) ? 'fill-warning text-warning' : 'fill-muted text-muted',
            )}
          />
        ))}
      </span>
      {showValue && <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>}
      {reviews != null && <span className="text-sm text-muted-foreground">({reviews})</span>}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn('max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  )
}
