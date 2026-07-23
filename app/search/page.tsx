'use client'

import { useState } from 'react'
import { MapPin, ArrowRight, Sliders } from 'lucide-react'
import { rides } from '@/lib/placeholder-data'
import { RideCard } from '@/components/site/ride-card'
import { FilterSidebar, type FilterState } from '@/components/site/filter-sidebar'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/bits'

export default function SearchPage() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50],
    time: [],
    amenities: [],
    driverRating: 0,
    instantBook: false,
  })
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [sortBy, setSortBy] = useState<'relevant' | 'price' | 'time' | 'rating'>('relevant')

  const filteredRides = rides.filter((ride) => {
    // Price range filter
    if (ride.price < filters.priceRange[0] || ride.price > filters.priceRange[1]) {
      return false
    }

    // Time filter
    if (filters.time.length > 0) {
      const hour = parseInt(ride.departTime.split(':')[0])
      const matchesTime = filters.time.some((t) => {
        if (t === 'early') return hour >= 6 && hour < 9
        if (t === 'morning') return hour >= 9 && hour < 12
        if (t === 'afternoon') return hour >= 12 && hour < 18
        if (t === 'evening') return hour >= 18 || hour < 6
        return false
      })
      if (!matchesTime) return false
    }

    // Driver rating filter
    if (filters.driverRating > 0 && ride.driver.rating < filters.driverRating) {
      return false
    }

    // Instant book filter
    if (filters.instantBook && !ride.instantBook) {
      return false
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      const hasAll = filters.amenities.every((a) =>
        ride.amenities.some((ra) => ra.toLowerCase().includes(a.toLowerCase()))
      )
      if (!hasAll) return false
    }

    return true
  })

  const sortedRides = [...filteredRides].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price
    if (sortBy === 'time') return a.departTime.localeCompare(b.departTime)
    if (sortBy === 'rating') return b.driver.rating - a.driver.rating
    return 0
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Search Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold text-foreground">Search rides</h1>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-5" />
                <span className="font-medium">Lisbon</span>
              </div>
              <ArrowRight className="hidden size-5 text-muted-foreground sm:block" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-5" />
                <span className="font-medium">Porto</span>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="outline">
                  Modify search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full gap-2"
            >
              <Sliders className="size-4" />
              Filters {filters.time.length > 0 || filters.amenities.length > 0 ? `(${filters.time.length + filters.amenities.length})` : ''}
            </Button>
            {showMobileFilters && (
              <div className="mt-4">
                <FilterSidebar onFilterChange={setFilters} />
              </div>
            )}
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{sortedRides.length}</span> rides
              </p>
              <select
                className="border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              >
                <option value="relevant">Most relevant</option>
                <option value="price">Lowest price</option>
                <option value="time">Earliest departure</option>
                <option value="rating">Highest rated</option>
              </select>
            </div>

            <div className="space-y-4">
              {sortedRides.length > 0 ? (
                sortedRides.map((ride) => (
                  <RideCard key={ride.id} ride={ride} />
                ))
              ) : (
                <div className="border border-border bg-card p-12 text-center">
                  <p className="text-muted-foreground mb-2">No rides found matching your filters</p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters({
                      priceRange: [0, 50],
                      time: [],
                      amenities: [],
                      driverRating: 0,
                      instantBook: false,
                    })}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
