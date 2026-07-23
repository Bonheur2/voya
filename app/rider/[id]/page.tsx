'use client'

import { ArrowLeft, MessageCircle, Share2, Flag, CheckCircle, Heart, MapPin, Briefcase, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/site/bits'
import { ReviewItem, type Review } from '@/components/site/review-item'

// Mock rider data
const riderData = {
  id: 'rider-001',
  name: 'Maria Silva',
  avatar: '/images/avatar-4.png',
  rating: 4.8,
  reviews: 89,
  trips: 156,
  memberSince: 'May 2022',
  verified: true,
  bio: 'Regular commuter and weekend explorer. I enjoy friendly conversations but respect personal space. Always courteous and tidy.',
  responseRate: 98,
  location: 'Porto, Portugal',
  workplace: 'Tech Company, Downtown Porto',
  favoriteRoutes: ['Porto to Lisbon', 'Porto to Covilhã', 'Porto to Aveiro'],
  preferences: {
    chatty: true,
    music: true,
    luggage: false,
    temperature: 'moderate',
  },
  verificationStatus: {
    identity: true,
    phone: true,
    email: true,
    payment: true,
  },
  badges: ['Superrider', 'Early Adopter', 'Community Helper'],
}

// Mock reviews from drivers
const riderReviews: Review[] = [
  {
    id: 'r1',
    author: 'Sofia M.',
    avatar: '/images/avatar-1.png',
    rating: 5,
    date: '3 weeks ago',
    text: 'Maria was a perfect passenger! Respectful, on time, and made great conversation. Would love to ride with her again.',
  },
  {
    id: 'r2',
    author: 'Tomás R.',
    avatar: '/images/avatar-2.png',
    rating: 4.5,
    date: '1 month ago',
    text: 'Nice passenger, good company. Only note: was a bit late to pickup, but otherwise excellent.',
  },
  {
    id: 'r3',
    author: 'Lucas F.',
    avatar: '/images/avatar-3.png',
    rating: 5,
    date: '2 months ago',
    text: 'Great experience! Maria respected my route preferences and was very understanding. Highly recommend!',
  },
]

export default function RiderProfilePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/search" className="rounded-lg hover:bg-muted p-2 -m-2 transition-colors">
            <ArrowLeft className="size-5 text-foreground" />
          </Link>
          <h1 className="text-xl font-semibold text-foreground">{riderData.name}</h1>
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
            {/* Rider Header Card */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <Avatar src={riderData.avatar} alt={riderData.name} size={120} className="ring-4 ring-primary/20" />
                  {riderData.verified && (
                    <div className="absolute bottom-0 right-0 bg-success rounded-full p-2">
                      <CheckCircle className="size-6 text-success-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-3xl font-extrabold text-foreground">{riderData.name}</h2>
                </div>
                <p className="text-muted-foreground mb-4">Member since {riderData.memberSince}</p>
                <RatingStars rating={riderData.rating} showValue reviews={riderData.reviews} className="justify-center mb-4" />
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <span>{riderData.trips} trips completed</span>
                  <span>•</span>
                  <span>{riderData.reviews} reviews</span>
                  <span>•</span>
                  <span>{riderData.responseRate}% response rate</span>
                </div>
              </div>

              {/* Rider Badges */}
              <div className="flex justify-center gap-2 flex-wrap mb-6">
                {riderData.badges.map((badge) => (
                  <Badge key={badge} className="bg-primary/20 text-primary border-0">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            {/* About & Location */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="size-5 text-primary" />
                About
              </h3>
              <p className="text-foreground leading-relaxed mb-6">{riderData.bio}</p>

              <div className="space-y-3 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground">{riderData.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Works at</p>
                    <p className="text-foreground">{riderData.workplace}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Preferences</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-4 rounded-lg ${riderData.preferences.chatty ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Conversation</p>
                  <p className="font-semibold text-foreground">{riderData.preferences.chatty ? 'Chatty' : 'Quiet'}</p>
                </div>
                <div className={`p-4 rounded-lg ${riderData.preferences.music ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Music</p>
                  <p className="font-semibold text-foreground">{riderData.preferences.music ? 'Yes' : 'No'}</p>
                </div>
                <div className={`p-4 rounded-lg ${riderData.preferences.luggage ? 'bg-success/10 border border-success/30' : 'bg-muted/50 border border-border'}`}>
                  <p className="text-xs text-muted-foreground mb-1">Luggage</p>
                  <p className="font-semibold text-foreground">{riderData.preferences.luggage ? 'Often' : 'Rarely'}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Temperature</p>
                  <p className="font-semibold text-foreground capitalize">{riderData.preferences.temperature}</p>
                </div>
              </div>
            </div>

            {/* Favorite Routes */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Favorite Routes</h3>
              <div className="space-y-2">
                {riderData.favoriteRoutes.map((route) => (
                  <div key={route} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Heart className="size-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{route}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Status */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Verification Status</h3>
              <div className="space-y-3">
                {Object.entries(riderData.verificationStatus).map(([key, verified]) => (
                  <div key={key} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className={`size-5 flex-shrink-0 ${verified ? 'text-success' : 'text-muted-foreground'}`} />
                    <span className="text-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()} verified</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Reviews from Drivers ({riderData.reviews})</h3>
              <div className="space-y-4">
                {riderReviews.map((review) => (
                  <ReviewItem key={review.id} review={review} />
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View all reviews
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-3">
              <Button className="w-full gap-2">
                <MessageCircle className="size-4" />
                Message
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Heart className="size-4" />
                Follow
              </Button>

              {/* Trust Indicators */}
              <div className="border-t border-border pt-4 mt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="size-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Verified rider</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="size-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Member since 2022</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Badge variant="secondary" className="flex-shrink-0 bg-success/10 text-success border-0">
                    {riderData.trips} trips
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
                We verify all riders. Learn more about our safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
