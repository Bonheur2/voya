import { MapPin } from 'lucide-react'
import type { Ride } from '@/lib/placeholder-data'
import { cn } from '@/lib/utils'

export function RideTimeline({ stops }: { stops: Ride['stops'] }) {
  return (
    <div className="space-y-4">
      {stops.map((stop, index) => (
        <div key={index} className="flex gap-4">
          {/* Timeline marker */}
          <div className="flex flex-col items-center gap-2 pt-1">
            <div
              className={cn(
                'size-3 rounded-full border-2',
                stop.type === 'origin'
                  ? 'border-primary bg-primary'
                  : stop.type === 'destination'
                    ? 'border-primary bg-primary'
                    : 'border-primary bg-white',
              )}
            />
            {index < stops.length - 1 && (
              <div className="w-0.5 h-12 bg-border rounded" />
            )}
          </div>

          {/* Stop content */}
          <div className="flex-1 pb-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{stop.time}</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="size-4 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{stop.label}</p>
                </div>
              </div>
              {stop.type === 'stop' && (
                <span className="inline-flex rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Stop
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
