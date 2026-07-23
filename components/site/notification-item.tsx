'use client'

import { Bell, MessageSquare, Star, DollarSign, AlertCircle, X } from 'lucide-react'
import Link from 'next/link'
import { Avatar } from '@/components/ui/avatar'
import { type Notification } from '@/lib/placeholder-data'
import { useState } from 'react'

interface NotificationItemProps {
  notification: Notification
  onDismiss?: (id: string) => void
}

export function NotificationItem({ notification, onDismiss }: NotificationItemProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  const getIcon = () => {
    switch (notification.type) {
      case 'booking':
        return <Bell className="size-5" />
      case 'message':
        return <MessageSquare className="size-5" />
      case 'review':
        return <Star className="size-5" />
      case 'payment':
        return <DollarSign className="size-5" />
      case 'alert':
        return <AlertCircle className="size-5" />
      default:
        return <Bell className="size-5" />
    }
  }

  const getColorClasses = () => {
    switch (notification.type) {
      case 'booking':
        return 'bg-primary/10 text-primary'
      case 'message':
        return 'bg-blue-500/10 text-blue-500'
      case 'review':
        return 'bg-warning/10 text-warning'
      case 'payment':
        return 'bg-success/10 text-success'
      case 'alert':
        return 'bg-orange-500/10 text-orange-500'
      default:
        return 'bg-muted/50 text-muted-foreground'
    }
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDismissed(true)
    onDismiss?.(notification.id)
  }

  const content = (
    <div
      className={`rounded-xl border transition-all ${
        notification.read
          ? 'border-border bg-card hover:bg-muted/30'
          : 'border-primary/30 bg-primary/5 hover:bg-primary/10'
      } p-4 flex items-start gap-4 group`}
    >
      {/* Icon or Avatar */}
      <div className="flex-shrink-0">
        {notification.avatar ? (
          <Avatar src={notification.avatar} alt={notification.title} size={40} className="ring-2 ring-border" />
        ) : (
          <div className={`p-3 rounded-lg ${getColorClasses()}`}>{getIcon()}</div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className={`font-semibold ${notification.read ? 'text-foreground' : 'text-foreground font-bold'}`}>
            {notification.title}
          </p>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Dismiss notification"
          >
            <X className="size-4" />
          </button>
        </div>
        <p className={`text-sm ${notification.read ? 'text-muted-foreground' : 'text-foreground/80'} line-clamp-2`}>
          {notification.description}
        </p>
        <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
      </div>

      {/* Unread Indicator */}
      {!notification.read && <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-1" />}
    </div>
  )

  if (notification.actionUrl) {
    return <Link href={notification.actionUrl}>{content}</Link>
  }

  return content
}
