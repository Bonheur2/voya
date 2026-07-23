'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface FilterSidebarProps {
  onFilterChange?: (filters: FilterState) => void
}

export interface FilterState {
  priceRange: [number, number]
  time: string[]
  amenities: string[]
  driverRating: number
  instantBook: boolean
}

const timeOptions = [
  { label: 'Early morning (6am - 9am)', value: 'early' },
  { label: 'Morning (9am - 12pm)', value: 'morning' },
  { label: 'Afternoon (12pm - 6pm)', value: 'afternoon' },
  { label: 'Evening (6pm - 12am)', value: 'evening' },
]

const amenityOptions = [
  { label: 'Air conditioning', value: 'ac' },
  { label: 'Phone charger', value: 'charger' },
  { label: 'Music', value: 'music' },
  { label: 'Pets allowed', value: 'pets' },
]

const ratingOptions = [
  { label: '4.8+', value: 4.8 },
  { label: '4.5+', value: 4.5 },
  { label: '4.0+', value: 4.0 },
  { label: 'Any', value: 0 },
]

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    time: true,
    amenities: true,
    rating: true,
  })

  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50],
    time: [],
    amenities: [],
    driverRating: 0,
    instantBook: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateFilter = (updates: Partial<FilterState>) => {
    const newFilters = { ...filters, ...updates }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  return (
    <aside className="sticky top-20 h-fit space-y-4 border border-border bg-card p-5">
      <h2 className="text-lg font-semibold text-foreground">Filters</h2>

      {/* Time Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('time')}
          className="flex w-full items-center justify-between hover:bg-muted p-2 -m-2 text-sm font-medium text-foreground"
        >
          Departure time
          <ChevronDown
            className={cn(
              'size-4 transition-transform',
              expandedSections.time && 'rotate-180',
            )}
          />
        </button>
        {expandedSections.time && (
          <div className="mt-3 space-y-2.5">
            {timeOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2.5 cursor-pointer">
                <Checkbox
                  checked={filters.time.includes(option.value)}
                  onChange={(checked) => {
                    const newTime = checked
                      ? [...filters.time, option.value]
                      : filters.time.filter((t) => t !== option.value)
                    updateFilter({ time: newTime })
                  }}
                />
                <span className="text-sm text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Amenities Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('amenities')}
          className="flex w-full items-center justify-between hover:bg-muted p-2 -m-2 text-sm font-medium text-foreground"
        >
          Amenities
          <ChevronDown
            className={cn(
              'size-4 transition-transform',
              expandedSections.amenities && 'rotate-180',
            )}
          />
        </button>
        {expandedSections.amenities && (
          <div className="mt-3 space-y-2.5">
            {amenityOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2.5 cursor-pointer">
                <Checkbox
                  checked={filters.amenities.includes(option.value)}
                  onChange={(checked) => {
                    const newAmenities = checked
                      ? [...filters.amenities, option.value]
                      : filters.amenities.filter((a) => a !== option.value)
                    updateFilter({ amenities: newAmenities })
                  }}
                />
                <span className="text-sm text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex w-full items-center justify-between hover:bg-muted p-2 -m-2 text-sm font-medium text-foreground"
        >
          Driver rating
          <ChevronDown
            className={cn(
              'size-4 transition-transform',
              expandedSections.rating && 'rotate-180',
            )}
          />
        </button>
        {expandedSections.rating && (
          <div className="mt-3 space-y-2.5">
            {ratingOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2.5 cursor-pointer">
                <Checkbox
                  checked={filters.driverRating === option.value}
                  onChange={(checked) => {
                    if (checked) {
                      updateFilter({ driverRating: option.value })
                    }
                  }}
                />
                <span className="text-sm text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Instant Book */}
      <label className="flex items-center gap-2.5 cursor-pointer">
        <Checkbox
          checked={filters.instantBook}
          onChange={(checked) => updateFilter({ instantBook: checked })}
        />
        <span className="text-sm font-medium text-foreground">Instant booking only</span>
      </label>

      {/* Reset button */}
      {(filters.time.length > 0 || filters.amenities.length > 0 || filters.driverRating > 0 || filters.instantBook) && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setFilters({
              priceRange: [0, 50],
              time: [],
              amenities: [],
              driverRating: 0,
              instantBook: false,
            })
            onFilterChange?.({
              priceRange: [0, 50],
              time: [],
              amenities: [],
              driverRating: 0,
              instantBook: false,
            })
          }}
        >
          Clear filters
        </Button>
      )}
    </aside>
  )
}
