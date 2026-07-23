'use client'

import { Users, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export interface ProfileSwitcherProps {
  driverId: string
  riderId?: string
  currentRole: 'driver' | 'rider'
  driverName: string
  riderName?: string
}

export function ProfileSwitcher({ driverId, riderId, currentRole, driverName, riderName }: ProfileSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Badge variant={currentRole === 'driver' ? 'default' : 'outline'} className="flex items-center gap-2">
        <User className="size-3" />
        Driver
      </Badge>
      {riderId && (
        <Badge variant={currentRole === 'rider' ? 'default' : 'outline'} className="flex items-center gap-2">
          <Users className="size-3" />
          Rider
        </Badge>
      )}
    </div>
  )
}
