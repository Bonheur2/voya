'use client'

import { Car } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import type { RideFormData } from '../publish-ride-form'

interface VehicleStepProps {
  formData: RideFormData
  onUpdate: (data: Partial<RideFormData>) => void
}

const vehicleFeatures = [
  { id: 'wifi', label: 'Wi-Fi' },
  { id: 'usb', label: 'USB Charger' },
  { id: 'aux', label: 'AUX Cable' },
  { id: 'water', label: 'Water Bottle' },
  { id: 'blanket', label: 'Blanket' },
  { id: 'air-conditioning', label: 'Air Conditioning' },
  { id: 'heating', label: 'Heating' },
  { id: 'sunroof', label: 'Sunroof' },
]

export function VehicleStep({ formData, onUpdate }: VehicleStepProps) {
  const toggleFeature = (featureId: string) => {
    const updated = formData.vehicleFeatures.includes(featureId)
      ? formData.vehicleFeatures.filter((f) => f !== featureId)
      : [...formData.vehicleFeatures, featureId]
    onUpdate({ vehicleFeatures: updated })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Your Vehicle</h2>
        <p className="mt-2 text-muted-foreground">Tell us about the car you&apos;ll be driving</p>
      </div>

      <div className="space-y-6">
        {/* Vehicle Info Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="model" className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Car className="h-4 w-4 text-primary" />
              Vehicle Model
            </Label>
            <Input
              id="model"
              placeholder="e.g., Toyota Prius"
              value={formData.vehicleModel}
              onChange={(e) =>
                onUpdate({
                  vehicleModel: e.target.value,
                })
              }
              className="h-11"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="color" className="text-sm font-semibold text-foreground">
              Color
            </Label>
            <Input
              id="color"
              placeholder="e.g., Silver"
              value={formData.vehicleColor}
              onChange={(e) =>
                onUpdate({
                  vehicleColor: e.target.value,
                })
              }
              className="h-11"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="year" className="text-sm font-semibold text-foreground">
              Year
            </Label>
            <Input
              id="year"
              type="number"
              min="2000"
              max={new Date().getFullYear()}
              value={formData.vehicleYear}
              onChange={(e) =>
                onUpdate({
                  vehicleYear: parseInt(e.target.value),
                })
              }
              className="h-11"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="seats" className="text-sm font-semibold text-foreground">
              Available Seats
            </Label>
            <select
              id="seats"
              value={formData.vehicleSeats}
              onChange={(e) =>
                onUpdate({
                  vehicleSeats: parseInt(e.target.value),
                })
              }
              className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <option key={num} value={num}>
                  {num} seat{num !== 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">Vehicle Features (Optional)</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {vehicleFeatures.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <Checkbox
                  id={feature.id}
                  checked={formData.vehicleFeatures.includes(feature.id)}
                  onCheckedChange={() => toggleFeature(feature.id)}
                />
                <Label
                  htmlFor={feature.id}
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>

          {formData.vehicleFeatures.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {formData.vehicleFeatures.map((feature) => (
                <Badge key={feature} variant="secondary" className="text-xs">
                  {vehicleFeatures.find((f) => f.id === feature)?.label}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
