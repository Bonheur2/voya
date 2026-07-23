import { CheckCircle, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  id: string
  label: string
  description?: string
}

interface ProgressStepperProps {
  steps: Step[]
  currentStep: number
  className?: string
}

export function ProgressStepper({
  steps,
  currentStep,
  className,
}: ProgressStepperProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Desktop view - horizontal */}
      <div className="hidden sm:flex items-center gap-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          const isUpcoming = index > currentStep

          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step circle */}
              <div
                className={cn(
                  'flex items-center justify-center h-10 w-10 rounded-full font-semibold transition-all shrink-0',
                  isCompleted && 'bg-primary text-primary-foreground',
                  isCurrent && 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2',
                  isUpcoming && 'bg-secondary text-muted-foreground'
                )}
              >
                {isCompleted ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              {/* Label */}
              <div className="ml-3 flex-1">
                <p
                  className={cn(
                    'font-medium text-sm',
                    isCurrent && 'text-primary',
                    isUpcoming && 'text-muted-foreground'
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                )}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'h-1 flex-1 mx-2',
                    isCompleted ? 'bg-primary' : 'bg-secondary'
                  )}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile view - vertical */}
      <div className="sm:hidden space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          const isUpcoming = index > currentStep

          return (
            <div key={step.id} className="flex items-start gap-3">
              {/* Step circle */}
              <div
                className={cn(
                  'flex items-center justify-center h-8 w-8 rounded-full font-semibold transition-all shrink-0 flex-col',
                  isCompleted && 'bg-primary text-primary-foreground',
                  isCurrent && 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2',
                  isUpcoming && 'bg-secondary text-muted-foreground'
                )}
              >
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>

              {/* Label and connector */}
              <div className="flex-1 pt-1">
                <p
                  className={cn(
                    'font-medium text-sm',
                    isCurrent && 'text-primary',
                    isUpcoming && 'text-muted-foreground'
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                )}
              </div>

              {/* Vertical connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'w-0.5 h-6 -ml-4 mt-8',
                    isCompleted ? 'bg-primary' : 'bg-secondary'
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
