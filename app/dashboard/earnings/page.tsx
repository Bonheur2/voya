'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, TrendingUp, DollarSign, Award, Target, Download } from 'lucide-react'
import Link from 'next/link'
import { DashboardSidebar } from '@/components/site/dashboard-sidebar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { transactions } from '@/lib/placeholder-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const earningsData = [
  { month: 'Jan', earnings: 240, trips: 12 },
  { month: 'Feb', earnings: 320, trips: 16 },
  { month: 'Mar', earnings: 280, trips: 14 },
  { month: 'Apr', earnings: 450, trips: 22 },
  { month: 'May', earnings: 380, trips: 19 },
  { month: 'Jun', earnings: 520, trips: 26 },
]

const topRides = [
  { route: 'Lisbon → Porto', trips: 8, earnings: 144, rating: 4.9 },
  { route: 'Porto → Braga', trips: 6, earnings: 120, rating: 4.8 },
  { route: 'Covilhã → Lisbon', trips: 4, earnings: 96, rating: 4.7 },
  { route: 'Faro → Lisbon', trips: 3, earnings: 96, rating: 4.95 },
  { route: 'Lisbon → Sintra', trips: 5, earnings: 75, rating: 5.0 },
]

export default function EarningsPage() {
  const [filter, setFilter] = useState<'month' | 'all'>('month')

  const totalEarnings = transactions
    .filter((t) => t.type === 'earning')
    .reduce((sum, t) => sum + t.amount, 0)

  const thisMonthEarnings = 520
  const completedTrips = 26
  const averagePerTrip = thisMonthEarnings / completedTrips

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="size-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold text-foreground">Earnings</h1>
                <p className="text-sm text-muted-foreground mt-1">Track your driver earnings</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="size-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Earnings */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                <DollarSign className="size-5 text-success" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">€{totalEarnings.toFixed(2)}</p>
              <p className="text-xs text-success mt-2">↑ 12% from last month</p>
            </div>

            {/* This Month */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <TrendingUp className="size-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">€{thisMonthEarnings}</p>
              <p className="text-xs text-muted-foreground mt-2">{completedTrips} completed trips</p>
            </div>

            {/* Completed Trips */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Completed Trips</p>
                <Target className="size-5 text-warning" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">{completedTrips}</p>
              <p className="text-xs text-muted-foreground mt-2">This month</p>
            </div>

            {/* Average Per Trip */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-muted-foreground">Avg Per Trip</p>
                <Award className="size-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">€{averagePerTrip.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground mt-2">Per ride</p>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">Earnings Trend</h2>
              <p className="text-sm text-muted-foreground">Your monthly earnings and trip count</p>
            </div>

            {/* Simple Bar Chart */}
            <div className="space-y-4">
              {earningsData.map((data, index) => {
                const maxEarnings = Math.max(...earningsData.map((d) => d.earnings))
                const percentage = (data.earnings / maxEarnings) * 100

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{data.month}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">€{data.earnings}</span>
                        <Badge variant="outline" className="text-xs">{data.trips} trips</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top Routes */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Top Routes</h2>
              <div className="space-y-3">
                {topRides.map((ride, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{ride.route}</p>
                      <p className="text-xs text-muted-foreground">{ride.trips} trips completed</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">€{ride.earnings}</p>
                      <p className="text-xs text-warning">★ {ride.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h2>
              <div className="space-y-3">
                {transactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${transaction.type === 'earning' ? 'text-success' : 'text-foreground'}`}>
                        {transaction.type === 'earning' ? '+' : '-'}€{transaction.amount.toFixed(2)}
                      </p>
                      <Badge variant="outline" className="text-xs mt-1 capitalize">{transaction.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/dashboard/transactions" className="text-sm text-primary hover:underline mt-4 block">
                View all transactions →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
