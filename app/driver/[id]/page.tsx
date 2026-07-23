import { ArrowLeft, MessageCircle, Share2, Flag, CheckCircle, Users, Navigation, User } from 'lucide-react'
import Link from 'next/link'
import { drivers, rides } from '@/lib/placeholder-data'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/site/bits'
import { RideCard } from '@/components/site/ride-card'
import { ReviewItem, type Review } from '@/components/site/review-item'
import { notFound } from 'next/navigation'
import { ProfileSwitcher } from '@/components/site/profile-switcher'

// Mock reviews data
const driverReviews: Review[] = [
  {
    id: 'r1',
    author: 'Maria S.',
    avatar: '/images/avatar-4.png',
    rating: 5,
    date: '2 weeks ago',
    text: 'Sofia was an amazing driver! The car was spotless, she was punctual and the conversation was great. Already booked with her again for next month.',
  },
  {
    id: 'r2',
    author: 'João P.',
    avatar: '/images/avatar-3.png',
    rating: 4.5,
    date: '1 month ago',
    text: 'Great ride, very professional. Only minor issue was AC could have been slightly cooler, but overall excellent service.',
  },
  {
    id: 'r3',
    author: 'Ana C.',
    avatar: '/images/avatar-6.png',
    rating: 5,
    date: '1 month ago',
    text: 'Top driver! Sofia helped me with my luggage and played good music. Would definitely recommend to friends.',
  },
]

const upcomingRides = rides.slice(0, 3)

export default async function DriverProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const driver = drivers.find((d) => d.id === id)

  if (!driver) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/search" className="rounded-lg hover:bg-muted p-2 -m-2 transition-colors">
            <ArrowLeft className="size-5 text-foreground" />
          </Link>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-semibold text-foreground">{driver.name}</h1>
            <div className="mt-1">
              <Badge variant="default" className="gap-2 bg-primary/20 text-primary border-0">
                <User className="size-3" />
                Driver Profile
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon-lg" aria-label="Share">
              <Share2 className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Driver Header Card */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <Avatar src={driver.avatar} alt={driver.name} size={120} className="ring-4 ring-primary/20" />
                  {driver.verified && (
                    <div className="absolute bottom-0 right-0 bg-success rounded-full p-2">
                      <CheckCircle className="size-6 text-success-foreground" />
                    </div>
                  )}
                </div>
                <h2 className="text-3xl font-extrabold text-foreground mb-2">{driver.name}</h2>
                <p className="text-muted-foreground mb-6">Member since {driver.memberSince}</p>
                <RatingStars rating={driver.rating} showValue reviews={driver.reviews} className="justify-center mb-4" />
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <span>{driver.trips} trips completed</span>
                  <span>•</span>
                  <span>{driver.reviews} reviews</span>
                </div>
              </div>

              {/* Driver Badge */}
              <div className="flex justify-center pt-4 border-t border-border">
                <Badge className="bg-primary/20 text-primary border-0 gap-2">
                  <CheckCircle className="size-3" />
                  Verified Professional
                </Badge>
              </div>
            </div>

            {/* Bio */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-3">About</h3>
              <p className="text-foreground leading-relaxed">{driver.bio}</p>
            </div>

            {/* Car Info */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Vehicle</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Model</span>
                  <span className="font-medium text-foreground">{driver.car}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Color</span>
                  <span className="font-medium text-foreground">{driver.carColor}</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Preferences</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-4 rounded-lg ${driver.preferences.chatty ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Chatty</p>
                  <p className="font-semibold text-foreground">{driver.preferences.chatty ? 'Yes' : 'Prefers quiet'}</p>
                </div>
                <div className={`p-4 rounded-lg ${driver.preferences.music ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Music</p>
                  <p className="font-semibold text-foreground">{driver.preferences.music ? 'Yes' : 'No music'}</p>
                </div>
                <div className={`p-4 rounded-lg ${driver.preferences.pets ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Pets</p>
                  <p className="font-semibold text-foreground">{driver.preferences.pets ? 'Allowed' : 'Not allowed'}</p>
                </div>
                <div className={`p-4 rounded-lg ${driver.preferences.smoking ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Smoking</p>
                  <p className="font-semibold text-foreground">{driver.preferences.smoking ? 'Allowed' : 'Not allowed'}</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Reviews ({driver.reviews})</h3>
              <div className="space-y-4">
                {driverReviews.map((review) => (
                  <ReviewItem key={review.id} review={review} />
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View all reviews
              </Button>
            </div>

            {/* Upcoming Rides */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Upcoming rides</h3>
              <div className="space-y-4">
                {upcomingRides.map((ride) => (
                  <RideCard key={ride.id} ride={ride} className="cursor-pointer" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Action Card */}
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-3">
              <Button className="w-full gap-2">
                <MessageCircle className="size-4" />
                Message
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Navigation className="size-4" />
                Book a ride
              </Button>

              {/* Trust Indicators */}
              <div className="border-t border-border pt-4 mt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="size-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Identity verified</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="size-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Member since 2021</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Badge variant="success" className="flex-shrink-0">
                    {driver.trips} trips
                  </Badge>
                </div>
              </div>

              {/* Report Button */}
              <Button variant="outline" className="w-full gap-2 text-destructive hover:text-destructive mt-4 border-destructive/30 hover:border-destructive/50">
                <Flag className="size-4" />
                Report
              </Button>

              {/* Safety note */}
              <p className="text-xs text-muted-foreground text-center pt-2">
                We thoroughly vet all drivers. Read our safety guidelines before booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
