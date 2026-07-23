'use client'

import { MapPin, Calendar, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import type { RideFormData } from '../publish-ride-form'

interface RouteStepProps {
  formData: RideFormData
  onUpdate: (data: Partial<RideFormData>) => void
}

export function RouteStep({ formData, onUpdate }: RouteStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Route & Schedule</h2>
        <p className="mt-2 text-muted-foreground">Where are you traveling and when?</p>
      </div>

      <div className="space-y-6">
        {/* Departure */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Departure Location
          </label>
          <Input
            placeholder="e.g., Paris, France"
            value={formData.departureLocation}
            onChange={(e) =>
              onUpdate({
                departureLocation: e.target.value,
              })
            }
            className="h-11"
          />
        </div>

        {/* Arrival */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Arrival Location
          </label>
          <Input
            placeholder="e.g., Lyon, France"
            value={formData.arrivalLocation}
            onChange={(e) =>
              onUpdate({
                arrivalLocation: e.target.value,
              })
            }
            className="h-11"
          />
        </div>

        {/* Date & Time */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              Departure Date
            </label>
            <Input
              type="date"
              value={formData.departureDate}
              onChange={(e) =>
                onUpdate({
                  departureDate: e.target.value,
                })
              }
              className="h-11"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Clock className="h-4 w-4 text-primary" />
              Departure Time
            </label>
            <Input
              type="time"
              value={formData.departureTime}
              onChange={(e) =>
                onUpdate({
                  departureTime: e.target.value,
                })
              }
              className="h-11"
            />
          </div>
        </div>

        {/* Return Trip */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Checkbox
              id="round-trip"
              checked={formData.isRoundTrip}
              onCheckedChange={(checked) =>
                onUpdate({
                  isRoundTrip: checked === true,
                })
              }
            />
            <Label
              htmlFor="round-trip"
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              This is a round trip
            </Label>
          </div>

          {formData.isRoundTrip && (
            <div className="grid gap-4 space-y-4 rounded-lg bg-secondary/50 p-4 sm:grid-cols-2">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  Return Date
                </label>
                <Input
                  type="date"
                  value={formData.returningDate || ''}
                  onChange={(e) =>
                    onUpdate({
                      returningDate: e.target.value,
                    })
                  }
                  className="h-11"
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  Return Time
                </label>
                <Input
                  type="time"
                  value={formData.returningTime || ''}
                  onChange={(e) =>
                    onUpdate({
                      returningTime: e.target.value,
                    })
                  }
                  className="h-11"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
