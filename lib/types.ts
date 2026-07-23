export type Driver = {
  id: string
  name: string
  avatar: string
  rating: number
  reviews: number
  trips: number
  memberSince: string
  verified: boolean
  bio: string
  car: string
  carColor: string
  preferences: {
    chatty: boolean
    music: boolean
    pets: boolean
    smoking: boolean
  }
}

export type RideStop = {
  label: string
  time: string
  type: 'origin' | 'stop' | 'destination'
}

export type Ride = {
  id: string
  driver: Driver
  from: string
  to: string
  date: string
  departTime: string
  arriveTime: string
  duration: string
  price: number
  seatsLeft: number
  instantBook: boolean
  stops: RideStop[]
  amenities: string[]
}

export type Booking = {
  id: string
  rideId: string
  passengers: number
  name: string
  driver: Driver
  from: string
  to: string
  date: string
  departTime: string
  status: 'upcoming' | 'completed' | 'cancelled'
  price: number
  paymentStatus: 'pending' | 'paid' | 'refunded'
}

export type Transaction = {
  id: string
  type: 'earning' | 'payment'
  amount: number
  description: string
  date: string
  status: 'completed' | 'pending' | 'refunded'
  rideId?: string
  driverId?: string
  driverName?: string
}

export type Notification = {
  id: string
  type: 'booking' | 'message' | 'review' | 'payment' | 'alert'
  title: string
  description: string
  timestamp: string
  read: boolean
  actionUrl?: string
  avatar?: string
}

export type Message = {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: string
  read: boolean
}

export type Conversation = {
  id: string
  participant: Driver
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  messages: Message[]
}

export type Review = {
  id: string
  authorId: string
  authorName: string
  authorAvatar: string
  targetId: string
  rating: number
  comment: string
  date: string
  rideRoute: string
}

export type Vehicle = {
  id: string
  make: string
  model: string
  year: number
  color: string
  licensePlate: string
  seats: number
  type: 'sedan' | 'suv' | 'hatchback' | 'electric' | 'van'
}

export type UserProfile = {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar: string
  phone?: string
  bio?: string
  memberSince: string
  verified: boolean
  rating: number
  reviews: number
  trips: number
  vehicles: Vehicle[]
}
