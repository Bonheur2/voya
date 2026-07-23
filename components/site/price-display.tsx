import { cn } from '@/lib/utils'

interface PriceDisplayProps {
  amount: number
  currency?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  highlight?: boolean
}

export function PriceDisplay({
  amount,
  currency = '€',
  size = 'md',
  className,
  highlight = false,
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  return (
    <div
      className={cn(
        'flex items-baseline gap-1 font-semibold',
        sizeClasses[size],
        highlight ? 'text-primary' : 'text-foreground',
        className
      )}
    >
      <span className="text-sm opacity-75">{currency}</span>
      <span>{amount.toFixed(2)}</span>
    </div>
  )
}
