import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, AlertCircle, XCircle, Info } from 'lucide-react'

type Status = 'confirmed' | 'pending' | 'completed' | 'cancelled' | 'info'

interface StatusBadgeProps {
  status: Status
  label: string
  className?: string
}

const statusConfig = {
  confirmed: {
    icon: CheckCircle,
    variant: 'default' as const,
    color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  },
  pending: {
    icon: Clock,
    variant: 'secondary' as const,
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  },
  completed: {
    icon: CheckCircle,
    variant: 'default' as const,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  },
  cancelled: {
    icon: XCircle,
    variant: 'outline' as const,
    color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  },
  info: {
    icon: Info,
    variant: 'outline' as const,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  },
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${config.color} ${className || ''}`}>
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
