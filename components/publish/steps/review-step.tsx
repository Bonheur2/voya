'use client'

import {
  MapPin,
  Calendar,
  Clock,
  Car,
  DollarSign,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import type { RideFormData } from '../publish-ride-form'

interface ReviewStepProps {
  formData: RideFormData
}

export function ReviewStep({ formData }: ReviewStepProps) {
  const formatDate = (date: string) => {
    if (!date) return '-'
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  const missingFields = [
    !formData.departureLocation && 'Departure location',
    !formData.arrivalLocation && 'Arrival location',
    !formData.departureDate && 'Departure date',
    !formData.vehicleModel && 'Vehicle model',
    !formData.pricePerSeat && 'Price per seat',
  ].filter(Boolean)

  const isComplete = missingFields.length === 0

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Review Your Ride</h2>
        <p className="mt-2 text-muted-foreground">
          Check everything before publishing
        </p>
      </div>

      {!isComplete && (
        <div className="rounded-lg border border-warning/50 bg-warning/10 p-4 flex gap-3">
          <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
          <div className="text-sm text-warning-foreground">
            <p className="font-semibold">Missing required information:</p>
            <ul className="mt-2 space-y-1">
              {missingFields.map((field) => (
                <li key={field} className="text-xs">• {field}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Route Section */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Route & Schedule</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">From</p>
              <p className="font-medium text-foreground">{formData.departureLocation || '-'}</p>
            </div>
            <div>
              <p className="text-muted-foreground">To</p>
              <p className="font-medium text-foreground">{formData.arrivalLocation || '-'}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Date
                </p>
                <p className="font-medium text-foreground">{formatDate(formData.departureDate)}</p>
              </div>
              <div>
                <p className="text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Time
                </p>
                <p className="font-medium text-foreground">{formData.departureTime}</p>
              </div>
            </div>

            {formData.isRoundTrip && (
              <div className="border-t border-border pt-3 mt-3">
                <p className="text-muted-foreground text-xs">Return</p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" /> Date
                    </p>
                    <p className="font-medium text-foreground text-sm">
                      {formatDate(formData.returningDate || '')}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" /> Time
                    </p>
                    <p className="font-medium text-foreground text-sm">{formData.returningTime}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Vehicle Section */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Car className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Vehicle Details</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Model</p>
              <p className="font-medium text-foreground">{formData.vehicleModel || '-'}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">Color</p>
                <p className="font-medium text-foreground">{formData.vehicleColor || '-'}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Year</p>
                <p className="font-medium text-foreground">{formData.vehicleYear}</p>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">Available Seats</p>
              <p className="font-medium text-foreground">{formData.vehicleSeats}</p>
            </div>

            {formData.vehicleFeatures.length > 0 && (
              <div className="pt-2">
                <p className="text-muted-foreground mb-2">Features</p>
                <div className="flex flex-wrap gap-2">
                  {formData.vehicleFeatures.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Pricing Section */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Pricing</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Price per Seat</p>
              <p className="font-medium text-foreground text-lg">
                €{parseFloat(formData.pricePerSeat || '0').toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Pricing Mode</p>
              <p className="font-medium text-foreground capitalize">{formData.priceMode}</p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="text-muted-foreground">Estimated Earnings</p>
              <p className="font-semibold text-primary text-lg">
                €{(parseFloat(formData.pricePerSeat || '0') * formData.vehicleSeats).toFixed(2)} per ride
              </p>
            </div>
          </div>
        </Card>

        {/* Trip Preferences Section */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Trip Preferences</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Passengers</p>
              <p className="font-medium text-foreground capitalize">{formData.allowedGenders}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Music</p>
              <p className="font-medium text-foreground capitalize">{formData.musicPreference}</p>
            </div>

            <div className="pt-2">
              <p className="text-muted-foreground mb-2">Allowed Items</p>
              <div className="flex flex-wrap gap-2">
                {formData.allowLuggage && <Badge variant="secondary" className="text-xs">Luggage</Badge>}
                {formData.allowPets && <Badge variant="secondary" className="text-xs">Pets</Badge>}
                {formData.smokingAllowed && <Badge variant="secondary" className="text-xs">Smoking</Badge>}
                {!formData.allowLuggage && !formData.allowPets && !formData.smokingAllowed && (
                  <Badge variant="outline" className="text-xs">Standard only</Badge>
                )}
              </div>
            </div>

            {formData.description && (
              <div className="pt-2 border-t border-border">
                <p className="text-muted-foreground mb-2">Description</p>
                <p className="text-foreground italic">"{formData.description}"</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Final Check */}
      {isComplete && (
        <div className="rounded-lg border border-success/50 bg-success/10 p-4 flex gap-3">
          <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
          <div className="text-sm text-success-foreground">
            <p className="font-semibold">All set! Your ride is ready to publish.</p>
            <p className="mt-1 text-xs opacity-90">Passengers will be able to see your ride immediately after publishing.</p>
          </div>
        </div>
      )}
    </div>
  )
}
