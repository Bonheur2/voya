'use client'

import { useState, useMemo } from 'react'
import { Bell, Check, Trash2, Filter } from 'lucide-react'
import { DashboardSidebar } from '@/components/site/dashboard-sidebar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { notifications } from '@/lib/placeholder-data'
import { NotificationItem } from '@/components/site/notification-item'

type FilterType = 'all' | 'unread' | 'booking' | 'message' | 'review' | 'payment'

export default function NotificationsPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set())

  const filteredNotifications = useMemo(() => {
    return notifications
      .filter((n) => !dismissedIds.has(n.id))
      .filter((n) => {
        if (filter === 'all') return true
        if (filter === 'unread') return !n.read
        return n.type === filter
      })
  }, [filter, dismissedIds])

  const unreadCount = notifications.filter((n) => !n.read && !dismissedIds.has(n.id)).length

  const handleDismiss = (id: string) => {
    setDismissedIds((prev) => new Set(prev).add(id))
  }

  const handleMarkAllAsRead = () => {
    // In a real app, this would update the backend
    console.log('Marked all as read')
  }

  const handleClearAll = () => {
    const allIds = new Set(notifications.map((n) => n.id))
    setDismissedIds(allIds)
  }

  const filterOptions: { value: FilterType; label: string; count: number }[] = [
    {
      value: 'all',
      label: 'All notifications',
      count: notifications.filter((n) => !dismissedIds.has(n.id)).length,
    },
    {
      value: 'unread',
      label: 'Unread',
      count: unreadCount,
    },
    {
      value: 'booking',
      label: 'Bookings',
      count: notifications.filter((n) => n.type === 'booking' && !dismissedIds.has(n.id)).length,
    },
    {
      value: 'message',
      label: 'Messages',
      count: notifications.filter((n) => n.type === 'message' && !dismissedIds.has(n.id)).length,
    },
    {
      value: 'review',
      label: 'Reviews',
      count: notifications.filter((n) => n.type === 'review' && !dismissedIds.has(n.id)).length,
    },
    {
      value: 'payment',
      label: 'Payments',
      count: notifications.filter((n) => n.type === 'payment' && !dismissedIds.has(n.id)).length,
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Bell className="size-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-extrabold text-foreground">Notifications</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                      {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}` : 'All caught up!'}
                    </p>
                  </div>
                </div>
              </div>

              {unreadCount > 0 && (
                <Button onClick={handleMarkAllAsRead} variant="outline" size="sm" className="gap-2">
                  <Check className="size-4" />
                  Mark all as read
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Filter className="size-4" />
                Filter by type
              </h2>
              {dismissedIds.size > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-xs font-medium text-destructive hover:underline flex items-center gap-1"
                >
                  <Trash2 className="size-3" />
                  Clear all
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === option.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {option.label}
                  {option.count > 0 && <Badge className="ml-2 text-xs">{option.count}</Badge>}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onDismiss={handleDismiss}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
                <div className="p-4 rounded-full bg-muted/30 w-fit mx-auto mb-4">
                  <Bell className="size-8 text-muted-foreground" />
                </div>
                <p className="text-foreground font-medium mb-1">No notifications</p>
                <p className="text-sm text-muted-foreground">
                  {filter === 'unread'
                    ? 'You&apos;re all caught up! No unread notifications at the moment.'
                    : `No ${filter} notifications to show.`}
                </p>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-semibold text-foreground mb-2">Notification Settings</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Customize your notification preferences in your profile settings to control what notifications you receive.
            </p>
            <Button variant="outline" size="sm">
              Go to Settings
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
