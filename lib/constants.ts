export const APP_NAME = 'Voya'
export const APP_DESCRIPTION = 'Share the ride, split the cost'
export const APP_URL = 'https://voya.app'

export const ROUTES = {
  home: '/',
  search: '/search',
  publish: '/publish',
  login: '/auth/login',
  signup: '/auth/signup',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',
  verifyEmail: '/auth/verify-email',
  dashboard: '/dashboard',
  bookings: '/dashboard/bookings',
  earnings: '/dashboard/earnings',
  messages: '/dashboard/messages',
  notifications: '/dashboard/notifications',
  profile: '/dashboard/profile',
} as const

export const RIDE_AMENITIES = [
  'Air conditioning',
  'Phone charger',
  'Pets allowed',
  'Music',
  'Instant booking',
  'Electric vehicle',
  'Eco ride',
  'Comfort',
  'Max 2 in back',
] as const

export const DEPARTURE_TIMES = [
  { value: 'early', label: 'Early morning', range: '06:00 – 09:00' },
  { value: 'morning', label: 'Morning', range: '09:00 – 12:00' },
  { value: 'afternoon', label: 'Afternoon', range: '12:00 – 18:00' },
  { value: 'evening', label: 'Evening', range: '18:00 – 00:00' },
] as const

export const PRICE_RANGE = { min: 0, max: 150 } as const

export const BOOKING_STATUS = {
  upcoming: 'upcoming',
  completed: 'completed',
  cancelled: 'cancelled',
} as const

export const PAYMENT_STATUS = {
  pending: 'pending',
  paid: 'paid',
  refunded: 'refunded',
} as const
