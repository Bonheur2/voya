'use client'

import { Car, Users, Briefcase, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface VehicleCardProps {
  id: string
  model: string
  color: string
  seats: number
  year: number
  image?: string
  features?: string[]
  verified?: boolean
  isSelected?: boolean
  onSelect?: (id: string) => void
}

export function VehicleCard({
  id,
  model,
  color,
  seats,
  year,
  image,
  features,
  verified,
  isSelected,
  onSelect,
}: VehicleCardProps) {
  return (
    <Card
      className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => onSelect?.(id)}
    >
      {image && (
        <div className="mb-4 h-40 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
          <Car className="h-20 w-20 text-primary/30" />
        </div>
      )}

      <div className="space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground text-lg line-clamp-1">{model}</h3>
            {verified && (
              <Badge variant="secondary" className="shrink-0 flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{color} • {year}</p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <div className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{seats} seats</span>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {features.slice(0, 2).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {features.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{features.length - 2} more
              </Badge>
            )}
          </div>
        )}

        {isSelected && (
          <div className="mt-3 p-2 bg-primary/10 rounded-lg flex items-center gap-2 text-sm text-primary font-medium">
            <div className="h-2 w-2 bg-primary rounded-full" />
            Selected for this ride
          </div>
        )}
      </div>
    </Card>
  )
}
