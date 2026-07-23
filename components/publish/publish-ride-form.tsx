'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RouteStep } from './steps/route-step'
import { VehicleStep } from './steps/vehicle-step'
import { PricingStep } from './steps/pricing-step'
import { DetailsStep } from './steps/details-step'
import { ReviewStep } from './steps/review-step'

export interface RideFormData {
  // Route & Date
  departureLocation: string
  departureLatitude: string
  departureLongitude: string
  arrivalLocation: string
  arrivalLatitude: string
  arrivalLongitude: string
  departureDate: string
  departureTime: string
  returningDate?: string
  returningTime?: string
  isRoundTrip: boolean

  // Vehicle
  vehicleId: string
  vehicleModel: string
  vehicleColor: string
  vehicleYear: number
  vehicleSeats: number
  vehicleFeatures: string[]

  // Pricing
  pricePerSeat: string
  priceMode: 'fixed' | 'flexible'

  // Details
  description: string
  allowedGenders: 'all' | 'women' | 'mixed'
  allowPets: boolean
  allowLuggage: boolean
  musicPreference: 'silent' | 'quiet' | 'any'
  smokingAllowed: boolean
  talkativeDriver: boolean

  // Contact (implicit)
  phoneNumber?: string
}

interface PublishRideFormProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function PublishRideForm({ currentStep, onStepChange }: PublishRideFormProps) {
  const [formData, setFormData] = useState<RideFormData>({
    departureLocation: '',
    departureLatitude: '',
    departureLongitude: '',
    arrivalLocation: '',
    arrivalLatitude: '',
    arrivalLongitude: '',
    departureDate: '',
    departureTime: '08:00',
    returningDate: '',
    returningTime: '18:00',
    isRoundTrip: false,
    vehicleId: '',
    vehicleModel: '',
    vehicleColor: '',
    vehicleYear: new Date().getFullYear(),
    vehicleSeats: 4,
    vehicleFeatures: [],
    pricePerSeat: '',
    priceMode: 'fixed',
    description: '',
    allowedGenders: 'all',
    allowPets: false,
    allowLuggage: true,
    musicPreference: 'quiet',
    smokingAllowed: false,
    talkativeDriver: true,
  })

  const updateFormData = (data: Partial<RideFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      onStepChange(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1)
    }
  }

  const handlePublish = () => {
    console.log('Publishing ride:', formData)
    // Here you would typically send the data to an API
  }

  return (
    <div className="space-y-8">
      {/* Step Content */}
      <div className="min-h-96 rounded-lg border border-border bg-card p-8">
        {currentStep === 0 && (
          <RouteStep formData={formData} onUpdate={updateFormData} />
        )}
        {currentStep === 1 && (
          <VehicleStep formData={formData} onUpdate={updateFormData} />
        )}
        {currentStep === 2 && (
          <PricingStep formData={formData} onUpdate={updateFormData} />
        )}
        {currentStep === 3 && (
          <DetailsStep formData={formData} onUpdate={updateFormData} />
        )}
        {currentStep === 4 && (
          <ReviewStep formData={formData} />
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>

        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of 5
        </div>

        {currentStep < 4 ? (
          <Button onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button onClick={handlePublish}>
            Publish Ride
          </Button>
        )}
      </div>
    </div>
  )
}
