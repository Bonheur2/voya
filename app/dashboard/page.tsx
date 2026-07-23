'use client'

import { TrendingUp, Calendar, DollarSign, Star, ArrowRight, MessageSquare } from 'lucide-react'
import { DashboardSidebar } from '@/components/site/dashboard-sidebar'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { rides } from '@/lib/placeholder-data'
import { RideCard } from '@/components/site/ride-card'
import Link from 'next/link'

const upcomingBookings = rides.slice(0, 2)

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground">Welcome back, Sofia</h1>
              <p className="text-sm text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your account</p>
            </div>
            <Avatar src="/images/avatar-1.png" alt="Your profile" size={48} className="ring-2 ring-border" />
          </div>
        </div>

        <div className="px-4 py-8 sm:px-6 lg:px-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Earnings */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Total earnings</p>
                <DollarSign className="size-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">€2,840</p>
              <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
            </div>

            {/* Trips */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Completed trips</p>
                <Calendar className="size-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">342</p>
              <p className="text-xs text-muted-foreground mt-2">This month: 28 rides</p>
            </div>

            {/* Rating */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Average rating</p>
                <Star className="size-5 text-warning" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">4.9</p>
              <p className="text-xs text-muted-foreground mt-2">Based on 214 reviews</p>
            </div>

            {/* Messages */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">New messages</p>
                <MessageSquare className="size-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">5</p>
              <p className="text-xs text-muted-foreground mt-2">3 unread</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Upcoming Rides */}
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Upcoming rides</h2>
                <Link href="/dashboard/bookings" className="text-sm font-medium text-primary hover:underline">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingBookings.length > 0 ? (
                  upcomingBookings.map((ride) => (
                    <div key={ride.id} className="rounded-xl border border-border bg-muted/30 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-foreground">{ride.from} → {ride.to}</p>
                            <Badge variant="success" className="text-xs">2 passengers</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{ride.date} at {ride.departTime}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">€{(ride.price * 2).toFixed(2)}</p>
                          <p className="text-xs text-muted-foreground">estimated</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">No upcoming rides</p>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-border bg-card p-6 h-fit space-y-3">
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick actions</h2>
              <Link href="/dashboard/publish" className="block">
                <Button className="w-full justify-start gap-2 mb-2">
                  <TrendingUp className="size-4" />
                  Publish a ride
                </Button>
              </Link>
              <Link href="/dashboard/messages" className="block">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageSquare className="size-4" />
                  Messages
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Badge className="size-4" />
                Edit profile
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent activity</h2>
            <div className="space-y-3">
              {[
                { event: 'New booking received', time: '2 hours ago', icon: Calendar, color: 'primary' },
                { event: 'Review from Maria S.', time: '5 hours ago', icon: Star, color: 'warning' },
                { event: 'Payment received: €54.00', time: '1 day ago', icon: DollarSign, color: 'success' },
                { event: 'Ride completed (Lisbon → Porto)', time: '2 days ago', icon: ArrowRight, color: 'muted-foreground' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className={`p-2 rounded-lg bg-${item.color === 'primary' ? 'primary' : item.color === 'warning' ? 'warning' : item.color === 'success' ? 'success' : 'muted'}/10`}>
                      <Icon className={`size-4 text-${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.event}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
