import { ArrowLeft, Users, TrendingUp, MessageCircle, Heart, Share2, Clock, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import { rides } from '@/lib/placeholder-data'
import { DriverCard } from '@/components/site/driver-card'
import { RideTimeline } from '@/components/site/ride-timeline'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'

export default async function RideDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ride = rides.find((r) => r.id === id)

  if (!ride) notFound()

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/search" className="rounded-lg hover:bg-muted p-2 -m-2 transition-colors">
              <ArrowLeft className="size-5 text-foreground" />
            </Link>
            <div>
              <p className="text-sm text-muted-foreground">{ride.date}</p>
              <h1 className="text-xl font-semibold text-foreground">{ride.from} → {ride.to}</h1>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button variant="ghost" size="icon-lg">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon-lg">
              <Share2 />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Overview */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground mb-4">Trip details</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-extrabold text-foreground">{ride.departTime}</p>
                  <p className="text-xs text-muted-foreground mt-1">Departure</p>
                </div>
                <div className="flex items-end justify-center pb-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-4" />
                    <span className="text-sm font-medium">{ride.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">{ride.arriveTime}</p>
                  <p className="text-xs text-muted-foreground mt-1">Arrival</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Route</h3>
                <RideTimeline stops={ride.stops} />
              </div>
            </div>

            {/* Amenities */}
            {ride.amenities.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-semibold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {ride.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground text-center"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Driver Section */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground mb-4">Your driver</h2>
              <DriverCard driver={ride.driver} showBio showActions />
            </div>

            {/* About the Ride */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground mb-4">About this ride</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Users className="size-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">{ride.seatsLeft} seats available</p>
                    <p className="text-sm text-muted-foreground mt-1">High demand – book soon to secure your spot</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="size-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Popular route</p>
                    <p className="text-sm text-muted-foreground mt-1">This route is booked 12+ times per week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Price per seat</p>
                <p className="text-4xl font-extrabold text-foreground tracking-tight">€{ride.price}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Seats</span>
                <div className="flex items-center gap-3">
                  <button className="size-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Minus className="size-4" />
                  </button>
                  <span className="text-lg font-semibold w-4 text-center">1</span>
                  <button className="size-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>

              {ride.instantBook && (
                <Badge variant="warning" className="w-full justify-center">
                  ⚡ Instant booking available
                </Badge>
              )}

              <Button className="w-full" size="lg">
                Book this ride
              </Button>

              <Button variant="outline" className="w-full gap-2">
                <MessageCircle className="size-4" />
                Message driver
              </Button>

              <div className="border-t border-border pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trip cost</span>
                  <span className="font-medium text-foreground">€{ride.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span className="font-medium text-foreground">€2.00</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">€{(ride.price + 2).toFixed(2)}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Free cancellation up to 24 hours before departure
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
