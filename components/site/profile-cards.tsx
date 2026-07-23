'use client'

import { ArrowRight, User, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface ProfileCard {
  role: 'driver' | 'rider'
  name: string
  id: string
  avatar: string
  rating: number
  trips: number
  bio: string
  status?: string
}

export function ProfileCards({
  driverProfile,
  riderProfile,
  className,
}: {
  driverProfile: ProfileCard
  riderProfile?: ProfileCard
  className?: string
}) {
  return (
    <div className={cn('grid gap-4 md:grid-cols-2', className)}>
      {/* Driver Profile Card */}
      <Link href={`/driver/${driverProfile.id}`}>
        <div className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <Badge className="bg-primary/20 text-primary border-0 gap-2">
              <User className="size-3" />
              Driver
            </Badge>
            <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{driverProfile.name}</h3>
              <p className="text-sm text-muted-foreground">Driver Profile</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-foreground">{driverProfile.rating}</div>
              <div>
                <p className="text-xs text-muted-foreground">★★★★★</p>
                <p className="text-xs text-muted-foreground">{driverProfile.trips} trips</p>
              </div>
            </div>

            <p className="text-sm text-foreground line-clamp-2">{driverProfile.bio}</p>

            {driverProfile.status && (
              <div className="pt-2 border-t border-border">
                <p className="text-xs font-medium text-success">{driverProfile.status}</p>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Rider Profile Card */}
      {riderProfile ? (
        <Link href={`/rider/${riderProfile.id}`}>
          <div className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <Badge variant="secondary" className="border-0 gap-2">
                <Users className="size-3" />
                Rider
              </Badge>
              <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{riderProfile.name}</h3>
                <p className="text-sm text-muted-foreground">Rider Profile</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-foreground">{riderProfile.rating}</div>
                <div>
                  <p className="text-xs text-muted-foreground">★★★★★</p>
                  <p className="text-xs text-muted-foreground">{riderProfile.trips} trips</p>
                </div>
              </div>

              <p className="text-sm text-foreground line-clamp-2">{riderProfile.bio}</p>

              {riderProfile.status && (
                <div className="pt-2 border-t border-border">
                  <p className="text-xs font-medium text-success">{riderProfile.status}</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-6 flex flex-col items-center justify-center h-full">
          <Users className="size-12 text-muted-foreground mb-3 opacity-50" />
          <h3 className="font-semibold text-foreground mb-2">Become a Rider</h3>
          <p className="text-sm text-muted-foreground text-center">Activate your rider profile to book rides as a passenger</p>
        </div>
      )}
    </div>
  )
}
