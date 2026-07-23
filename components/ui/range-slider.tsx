'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface RangeSliderProps {
  min?: number
  max?: number
  step?: number
  value: [number, number]
  onValueChange: (value: [number, number]) => void
  className?: string
}

const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  ({ min = 0, max = 100, step = 1, value, onValueChange, className }, ref) => {
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = Math.min(Number(e.target.value), value[1])
      onValueChange([newMin, value[1]])
    }

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = Math.max(Number(e.target.value), value[0])
      onValueChange([value[0], newMax])
    }

    return (
      <div ref={ref} className={cn('relative flex items-center gap-2', className)}>
        <div className="relative flex-1">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[0]}
            onChange={handleMinChange}
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full h-2 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
            style={{ zIndex: value[0] > max - (max - min) / 2 ? 5 : 3 }}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[1]}
            onChange={handleMaxChange}
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full h-2 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
            style={{ zIndex: value[1] < min + (max - min) / 2 ? 3 : 5 }}
          />
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-secondary rounded-full -z-10 pointer-events-none" />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 bg-primary rounded-full -z-10 pointer-events-none"
            style={{
              left: `${((value[0] - min) / (max - min)) * 100}%`,
              right: `${100 - ((value[1] - min) / (max - min)) * 100}%`,
            }}
          />
        </div>
      </div>
    )
  }
)
RangeSlider.displayName = 'RangeSlider'

export { RangeSlider }
