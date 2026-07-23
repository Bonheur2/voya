import { MapPin, Clock, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PriceDisplay } from '@/components/site/price-display'

interface TripInfoCardProps {
  from: string
  to: string
  date: string
  time: string
  seats: number
  price: number
  passengers?: number
  duration?: string
  className?: string
}

export function TripInfoCard({
  from,
  to,
  date,
  time,
  seats,
  price,
  passengers,
  duration,
  className,
}: TripInfoCardProps) {
  return (
    <Card className={`p-4 ${className}`}>
      {/* Route */}
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground uppercase font-semibold">From</p>
            <p className="text-foreground font-medium">{from}</p>
          </div>
        </div>

        {duration && (
          <div className="ml-6 text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {duration}
          </div>
        )}

        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground uppercase font-semibold">To</p>
            <p className="text-foreground font-medium">{to}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-4 space-y-3">
        {/* Date and time */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <Badge variant="secondary">{time}</Badge>
        </div>

        {/* Seats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>
              {passengers ? `${passengers} / ${seats} seats` : `${seats} seats available`}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-sm font-medium text-muted-foreground">Total price</span>
          <PriceDisplay amount={price} highlight size="lg" />
        </div>
      </div>
    </Card>
  )
}
