'use client'

import { ShieldCheck, Music, Users, Cigarette } from 'lucide-react'
import type { Driver } from '@/lib/placeholder-data'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/site/bits'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function DriverCard({
  driver,
  showBio = true,
  showActions = false,
  className,
}: {
  driver: Driver
  showBio?: boolean
  showActions?: boolean
  className?: string
}) {
  const getPrefIcon = (pref: string) => {
    switch (pref) {
      case 'music':
        return <Music className="size-3.5" />
      case 'pets':
        return <Users className="size-3.5" />
      case 'smoking':
        return <Cigarette className="size-3.5" />
      default:
        return null
    }
  }

  const getActivePrefLabels = () => {
    const prefs = []
    if (driver.preferences.music) prefs.push('Music')
    if (driver.preferences.pets) prefs.push('Pets allowed')
    if (driver.preferences.chatty) prefs.push('Chatty')
    return prefs
  }

  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <Avatar src={driver.avatar} alt={driver.name} size={56} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-semibold text-foreground">{driver.name}</h3>
              <p className="text-xs text-muted-foreground">Member since {driver.memberSince}</p>
            </div>
            {driver.verified && <ShieldCheck className="size-4 flex-shrink-0 text-success" />}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <RatingStars rating={driver.rating} showValue={true} reviews={driver.reviews} className="text-xs" />
            <span className="text-xs text-muted-foreground">
              {driver.trips} trips
            </span>
          </div>

          {showBio && <p className="mt-3 text-sm text-foreground leading-relaxed">{driver.bio}</p>}

          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-muted-foreground">{driver.carColor} {driver.car}</span>
            </div>

            {getActivePrefLabels().length > 0 && (
              <div className="flex flex-wrap gap-2">
                {getActivePrefLabels().map((pref) => (
                  <Badge key={pref} variant="secondary" className="text-xs">
                    {pref === 'Music' && <Music className="size-3" />}
                    {pref === 'Pets allowed' && <Users className="size-3" />}
                    {pref === 'Chatty' && '💬'}
                    {pref}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showActions && (
        <div className="mt-4 flex gap-2 border-t border-border pt-4">
          <Button variant="outline" className="flex-1" size="sm">
            Message
          </Button>
          <Button className="flex-1" size="sm">
            Book ride
          </Button>
        </div>
      )}
    </div>
  )
}
