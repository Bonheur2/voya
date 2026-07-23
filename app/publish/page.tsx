'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { ProgressStepper } from '@/components/site/progress-stepper'
import { PublishRideForm } from '@/components/publish/publish-ride-form'

export default function PublishPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { id: 'route', label: 'Route & Date', description: 'Where and when' },
    { id: 'vehicle', label: 'Vehicle', description: 'Pick your car' },
    { id: 'pricing', label: 'Pricing', description: 'Set your price' },
    { id: 'details', label: 'Details', description: 'Final touches' },
    { id: 'review', label: 'Review', description: 'Confirm' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Publish your ride
            </h1>
            <p className="mt-2 text-pretty text-muted-foreground">
              Share your journey and earn money by offering spare seats to passengers heading the same way.
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="mb-12">
            <ProgressStepper steps={steps} currentStep={currentStep} />
          </div>

          {/* Form */}
          <PublishRideForm currentStep={currentStep} onStepChange={setCurrentStep} />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
