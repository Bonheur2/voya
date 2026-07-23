'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, Clock, MapPin, Phone, DollarSign, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { DashboardSidebar } from '@/components/site/dashboard-sidebar'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { bookings } from '@/lib/placeholder-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function BookingsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all')

  const filteredBookings = bookings.filter((booking) => {
    if (filter === 'all') return true
    return booking.status === filter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <AlertCircle className="size-4 text-primary" />
      case 'completed':
        return <CheckCircle className="size-4 text-success" />
      case 'cancelled':
        return <XCircle className="size-4 text-destructive" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="outline" className="bg-primary/10 text-primary">Upcoming</Badge>
      case 'completed':
        return <Badge variant="outline" className="bg-success/10 text-success">Completed</Badge>
      case 'cancelled':
        return <Badge variant="outline" className="bg-destructive/10 text-destructive">Cancelled</Badge>
      default:
        return null
    }
  }

  const getPaymentStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="size-4 text-success" />
      case 'pending':
        return <AlertCircle className="size-4 text-warning" />
      case 'refunded':
        return <XCircle className="size-4 text-muted-foreground" />
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center gap-4">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="size-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold text-foreground">My Bookings</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage all your ride bookings</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-6">
            <Tabs defaultValue="all" value={filter} onValueChange={(v) => setFilter(v as any)}>
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All ({bookings.length})</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming ({bookings.filter(b => b.status === 'upcoming').length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({bookings.filter(b => b.status === 'completed').length})</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled ({bookings.filter(b => b.status === 'cancelled').length})</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Bookings List */}
          <div className="space-y-4">
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <div key={booking.id} className="rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors overflow-hidden">
                  <div className="p-6">
                    {/* Header with status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{booking.name}</h3>
                          {getStatusBadge(booking.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{booking.date} • {booking.passengers} passenger{booking.passengers > 1 ? 's' : ''}</p>
                      </div>
                      <p className="text-right">
                        <span className="text-2xl font-extrabold text-foreground">€{booking.price.toFixed(2)}</span>
                        <p className="text-xs text-muted-foreground mt-1">{booking.paymentStatus === 'paid' ? 'Paid' : 'Pending'}</p>
                      </p>
                    </div>

                    {/* Trip Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                      {/* From */}
                      <div className="flex items-start gap-3">
                        <MapPin className="size-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">From</p>
                          <p className="text-sm font-medium text-foreground">{booking.from}</p>
                        </div>
                      </div>

                      {/* To */}
                      <div className="flex items-start gap-3">
                        <MapPin className="size-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">To</p>
                          <p className="text-sm font-medium text-foreground">{booking.to}</p>
                        </div>
                      </div>

                      {/* Departure */}
                      <div className="flex items-start gap-3">
                        <Clock className="size-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Departure</p>
                          <p className="text-sm font-medium text-foreground">{booking.departTime}</p>
                        </div>
                      </div>

                      {/* Payment */}
                      <div className="flex items-start gap-3">
                        <DollarSign className="size-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Payment</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            {getPaymentStatusIcon(booking.paymentStatus)}
                            <p className="text-sm font-medium text-foreground capitalize">{booking.paymentStatus}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Driver Card */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar src={booking.driver.avatar} alt={booking.driver.name} size={48} />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{booking.driver.name}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                            <span className="text-warning">★ {booking.driver.rating}</span>
                            <span>•</span>
                            <span>{booking.driver.trips} trips</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {booking.status === 'upcoming' && (
                          <>
                            <Button variant="outline" size="sm">Cancel</Button>
                            <Button size="sm">Contact Driver</Button>
                          </>
                        )}
                        {booking.status === 'completed' && (
                          <Button variant="outline" size="sm">Leave Review</Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-border bg-card p-12 text-center">
                <Calendar className="size-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No bookings found</h3>
                <p className="text-sm text-muted-foreground mb-6">You don&apos;t have any {filter !== 'all' ? filter : ''} bookings yet.</p>
                <Link href="/search">
                  <Button>Find Rides</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
