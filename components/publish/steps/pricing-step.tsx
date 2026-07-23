'use client'

import { DollarSign, Info } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import type { RideFormData } from '../publish-ride-form'

interface PricingStepProps {
  formData: RideFormData
  onUpdate: (data: Partial<RideFormData>) => void
}

export function PricingStep({ formData, onUpdate }: PricingStepProps) {
  const pricePerSeatNum = parseFloat(formData.pricePerSeat) || 0

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Set Your Price</h2>
        <p className="mt-2 text-muted-foreground">
          Choose how much passengers pay per seat for your ride
        </p>
      </div>

      <div className="space-y-6">
        {/* Price Input */}
        <div className="space-y-3">
          <Label htmlFor="price" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <DollarSign className="h-4 w-4 text-primary" />
            Price per Seat (EUR)
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-lg font-semibold text-muted-foreground">€</span>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.50"
              placeholder="0.00"
              value={formData.pricePerSeat}
              onChange={(e) =>
                onUpdate({
                  pricePerSeat: e.target.value,
                })
              }
              className="h-11 pl-8"
            />
          </div>
        </div>

        {/* Price Mode */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-foreground">Pricing Mode</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                id: 'fixed',
                label: 'Fixed Price',
                description: 'Passengers pay the exact price you set',
              },
              {
                id: 'flexible',
                label: 'Flexible Price',
                description: 'Passengers can negotiate the price',
              },
            ].map((mode) => (
              <Card
                key={mode.id}
                className={`p-4 cursor-pointer transition-all ${
                  formData.priceMode === mode.id
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() =>
                  onUpdate({
                    priceMode: mode.id as 'fixed' | 'flexible',
                  })
                }
              >
                <h3 className="font-semibold text-foreground">{mode.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{mode.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="space-y-3 rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-start gap-3">
            <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Earnings Estimate</p>
              <p className="mt-1">
                With {formData.vehicleSeats} available seats at €{pricePerSeatNum.toFixed(2)} each:
              </p>
              <p className="mt-2 text-base font-semibold text-primary">
                €{(pricePerSeatNum * formData.vehicleSeats).toFixed(2)} per ride
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tips */}
        <div className="rounded-lg bg-accent/10 p-4 space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Pricing Tips:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Consider fuel costs and tolls</li>
            <li>• Check competitor prices for the same route</li>
            <li>• Round trips may attract more passengers</li>
            <li>• Peak hours (Friday evening) tend to have higher demand</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
