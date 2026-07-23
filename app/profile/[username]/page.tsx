'use client'

import { ArrowLeft, Share2, MapPin, Calendar, MessageCircle, Flag } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProfileCards } from '@/components/site/profile-cards'

// Mock profile data - in a real app, this would be fetched based on the username
const profileData = {
  username: 'sofia_m',
  joinedDate: 'March 2021',
  location: 'Porto, Portugal',
  bio: 'Weekend traveler and experienced driver. I love meeting new people on the road and always deliver safe, comfortable rides.',
  driverProfile: {
    role: 'driver' as const,
    name: 'Sofia Martins',
    id: 'sofia-m',
    avatar: '/images/avatar-1.png',
    rating: 4.9,
    trips: 342,
    bio: 'Weekend traveler who loves a good playlist and interesting conversation.',
    status: 'Verified Professional Driver',
  },
  riderProfile: {
    role: 'rider' as const,
    name: 'Sofia Martins',
    id: 'rider-sofia',
    avatar: '/images/avatar-1.png',
    rating: 4.8,
    trips: 156,
    bio: 'Regular commuter who enjoys friendly conversations and respects personal space.',
    status: 'Verified Rider',
  },
  statistics: {
    totalTrips: 498,
    totalReviews: 302,
    responseRate: 99,
    joinedMonthsAgo: 45,
  },
  verification: {
    identity: true,
    phone: true,
    email: true,
    payment: true,
    backgroundCheck: true,
  },
}

export default function PublicProfilePage({ params }: { params: Promise<{ username: string }> }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/search" className="rounded-lg hover:bg-muted p-2 -m-2 transition-colors">
            <ArrowLeft className="size-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">@{profileData.username}</h1>
          <Button variant="ghost" size="icon-lg" aria-label="Share">
            <Share2 className="size-5" />
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Hero */}
        <div className="rounded-2xl border border-border bg-card p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-4xl">
                SM
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-foreground mb-2">{profileData.driverProfile.name}</h2>
              <p className="text-muted-foreground mb-4">@{profileData.username}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Member since {profileData.joinedDate}</Badge>
                <Badge variant="outline">
                  <MapPin className="size-3 mr-1" />
                  {profileData.location}
                </Badge>
              </div>

              <p className="text-foreground mb-6 max-w-2xl">{profileData.bio}</p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 py-4 border-y border-border">
                <div>
                  <p className="text-2xl font-extrabold text-foreground">{profileData.statistics.totalTrips}</p>
                  <p className="text-xs text-muted-foreground">Total Trips</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-foreground">{profileData.statistics.totalReviews}</p>
                  <p className="text-xs text-muted-foreground">Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-foreground">{profileData.statistics.responseRate}%</p>
                  <p className="text-xs text-muted-foreground">Response Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-foreground">{profileData.statistics.joinedMonthsAgo}mo</p>
                  <p className="text-xs text-muted-foreground">Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="flex-1 gap-2">
              <MessageCircle className="size-4" />
              Message
            </Button>
            <Button variant="outline" className="flex-1">
              Copy Profile Link
            </Button>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-extrabold text-foreground mb-6">Profiles</h3>
          <ProfileCards
            driverProfile={profileData.driverProfile}
            riderProfile={profileData.riderProfile}
          />
        </div>

        {/* Details Tabs */}
        <Tabs defaultValue="verification" className="space-y-6">
          <TabsList>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="verification" className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Verification Status</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {Object.entries(profileData.verification).map(([key, verified]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border ${
                      verified
                        ? 'bg-success/10 border-success/30'
                        : 'bg-muted/50 border-border'
                    }`}
                  >
                    <p className="text-xs text-muted-foreground mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="font-semibold text-foreground">
                      {verified ? '✓ Verified' : 'Pending'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-border">
                  <Calendar className="size-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Completed 5-star ride</p>
                    <p className="text-sm text-muted-foreground">2 weeks ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-border">
                  <Calendar className="size-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Joined Superhost program</p>
                    <p className="text-sm text-muted-foreground">1 month ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="size-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Account verified</p>
                    <p className="text-sm text-muted-foreground">45 months ago</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Report Section */}
        <div className="mt-8 p-4 border border-destructive/30 bg-destructive/5 rounded-lg flex items-start gap-3">
          <Flag className="size-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Is this profile inappropriate?</p>
            <p className="text-xs text-muted-foreground mt-1">Report this profile if you find it violates our community guidelines.</p>
          </div>
          <button className="ml-auto text-sm font-medium text-destructive hover:underline whitespace-nowrap">Report</button>
        </div>
      </div>
    </main>
  )
}
