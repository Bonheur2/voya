import Link from 'next/link'
import { ArrowRight, Zap, Dot, ShieldCheck, Users } from 'lucide-react'
import type { Ride } from '@/lib/placeholder-data'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/site/bits'
import { cn } from '@/lib/utils'

export function RideCard({ ride, className }: { ride: Ride; className?: string }) {
  return (
    <Link
      href={`/rides/${ride.id}`}
      className={cn(
        'group block rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 items-center gap-4">
          {/* Timeline */}
          <div className="flex flex-col items-center gap-1 pt-1 text-xs font-semibold text-muted-foreground">
            <span className="text-foreground">{ride.departTime}</span>
            <span className="my-0.5 flex flex-col items-center">
              <span className="size-2.5 rounded-full border-2 border-primary" />
              <span className="my-0.5 h-8 w-0.5 rounded bg-border" />
              <span className="size-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-foreground">{ride.arriveTime}</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-foreground">{ride.from}</span>
              <span className="text-xs text-muted-foreground">{ride.duration}</span>
              <span className="font-semibold text-foreground">{ride.to}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold tracking-tight text-foreground">€{ride.price}</div>
          <div className="text-xs text-muted-foreground">per seat</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex items-center gap-2.5">
          <Avatar src={ride.driver.avatar} alt={ride.driver.name} size={36} />
          <div className="leading-tight">
            <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
              {ride.driver.name.split(' ')[0]}
              {ride.driver.verified && <ShieldCheck className="size-3.5 text-success" />}
            </div>
            <RatingStars rating={ride.driver.rating} showValue size={12} className="[&_span]:text-xs" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {ride.instantBook && (
            <Badge variant="warning">
              <Zap /> Instant
            </Badge>
          )}
          <Badge variant={ride.seatsLeft === 1 ? 'muted' : 'success'}>
            <Users />
            {ride.seatsLeft} left
          </Badge>
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  )
}
