'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, PlusCircle, MessageSquare, Bell, Settings, LogOut, Calendar, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Calendar, label: 'My bookings', href: '/dashboard/bookings' },
  { icon: PlusCircle, label: 'Publish a ride', href: '/dashboard/publish' },
  { icon: CreditCard, label: 'Earnings', href: '/dashboard/earnings' },
  { icon: MessageSquare, label: 'Messages', href: '/dashboard/messages' },
  { icon: Bell, label: 'Notifications', href: '/dashboard/notifications' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 bg-card border-r border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-6 space-y-2 flex flex-col">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="size-5" />
              {item.label}
            </Link>
          )
        })}

        <div className="flex-1" />

        <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors w-full text-left">
          <LogOut className="size-5" />
          Log out
        </button>
      </nav>
    </aside>
  )
}
