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
  preferences: { chatty: boolean; music: boolean; pets: boolean; smoking: boolean }
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
  stops: { label: string; time: string; type: 'origin' | 'stop' | 'destination' }[]
  amenities: string[]
}

export const drivers: Driver[] = [
  {
    id: 'sofia-m',
    name: 'Sofia Martins',
    avatar: '/images/avatar-1.png',
    rating: 4.9,
    reviews: 214,
    trips: 342,
    memberSince: 'March 2021',
    verified: true,
    bio: 'Weekend traveler who loves a good playlist and interesting conversation. I keep my car spotless and always leave on time.',
    car: 'Volkswagen Golf',
    carColor: 'Silver',
    preferences: { chatty: true, music: true, pets: false, smoking: false },
  },
  {
    id: 'tomas-r',
    name: 'Tomás Ribeiro',
    avatar: '/images/avatar-2.png',
    rating: 4.8,
    reviews: 158,
    trips: 201,
    memberSince: 'January 2020',
    verified: true,
    bio: 'Commuter driving this route weekly. Punctual, calm driver, happy to help with luggage.',
    car: 'Toyota Corolla',
    carColor: 'Blue',
    preferences: { chatty: false, music: true, pets: true, smoking: false },
  },
  {
    id: 'lucas-f',
    name: 'Lucas Ferreira',
    avatar: '/images/avatar-3.png',
    rating: 4.95,
    reviews: 302,
    trips: 480,
    memberSince: 'August 2019',
    verified: true,
    bio: 'Superhost driver. I do this route most weekends — comfortable ride, air conditioning, and phone chargers available.',
    car: 'Tesla Model 3',
    carColor: 'White',
    preferences: { chatty: true, music: false, pets: false, smoking: false },
  },
  {
    id: 'ana-c',
    name: 'Ana Costa',
    avatar: '/images/avatar-4.png',
    rating: 4.7,
    reviews: 96,
    trips: 122,
    memberSince: 'June 2022',
    verified: true,
    bio: 'Friendly and flexible. I love meeting new people on the road. Small bags only please.',
    car: 'Renault Clio',
    carColor: 'Red',
    preferences: { chatty: true, music: true, pets: false, smoking: false },
  },
  {
    id: 'miguel-s',
    name: 'Miguel Santos',
    avatar: '/images/avatar-5.png',
    rating: 4.85,
    reviews: 187,
    trips: 265,
    memberSince: 'November 2020',
    verified: true,
    bio: 'Experienced long-distance driver. Comfortable, safe, and reliable trips every time.',
    car: 'Peugeot 508',
    carColor: 'Grey',
    preferences: { chatty: false, music: true, pets: true, smoking: false },
  },
  {
    id: 'ines-l',
    name: 'Inês Lopes',
    avatar: '/images/avatar-6.png',
    rating: 4.9,
    reviews: 143,
    trips: 198,
    memberSince: 'February 2021',
    verified: true,
    bio: 'Eco-conscious traveler. I split costs fairly and always keep things relaxed and friendly.',
    car: 'Hyundai Ioniq',
    carColor: 'Green',
    preferences: { chatty: true, music: true, pets: false, smoking: false },
  },
]

export const rides: Ride[] = [
  {
    id: 'r1',
    driver: drivers[0],
    from: 'Lisbon',
    to: 'Porto',
    date: 'Fri, 14 Jun',
    departTime: '08:30',
    arriveTime: '11:45',
    duration: '3h 15m',
    price: 18,
    seatsLeft: 3,
    instantBook: true,
    stops: [
      { label: 'Lisbon · Oriente Station', time: '08:30', type: 'origin' },
      { label: 'Leiria · Bus Terminal', time: '09:45', type: 'stop' },
      { label: 'Coimbra · Train Station', time: '10:30', type: 'stop' },
      { label: 'Porto · Campanhã', time: '11:45', type: 'destination' },
    ],
    amenities: ['Air conditioning', 'Phone charger', 'Max 2 in back', 'Instant booking'],
  },
  {
    id: 'r2',
    driver: drivers[2],
    from: 'Lisbon',
    to: 'Porto',
    date: 'Fri, 14 Jun',
    departTime: '09:15',
    arriveTime: '12:20',
    duration: '3h 05m',
    price: 22,
    seatsLeft: 2,
    instantBook: true,
    stops: [
      { label: 'Lisbon · Sete Rios', time: '09:15', type: 'origin' },
      { label: 'Coimbra · Train Station', time: '11:00', type: 'stop' },
      { label: 'Porto · Trindade', time: '12:20', type: 'destination' },
    ],
    amenities: ['Electric vehicle', 'Air conditioning', 'Phone charger', 'Instant booking'],
  },
  {
    id: 'r3',
    driver: drivers[1],
    from: 'Lisbon',
    to: 'Porto',
    date: 'Fri, 14 Jun',
    departTime: '14:00',
    arriveTime: '17:30',
    duration: '3h 30m',
    price: 15,
    seatsLeft: 1,
    instantBook: false,
    stops: [
      { label: 'Lisbon · Oriente Station', time: '14:00', type: 'origin' },
      { label: 'Santarém · Center', time: '14:50', type: 'stop' },
      { label: 'Aveiro · Station', time: '16:40', type: 'stop' },
      { label: 'Porto · Campanhã', time: '17:30', type: 'destination' },
    ],
    amenities: ['Pets allowed', 'Music', 'Max 2 in back'],
  },
  {
    id: 'r4',
    driver: drivers[4],
    from: 'Lisbon',
    to: 'Porto',
    date: 'Fri, 14 Jun',
    departTime: '18:45',
    arriveTime: '21:55',
    duration: '3h 10m',
    price: 19,
    seatsLeft: 3,
    instantBook: true,
    stops: [
      { label: 'Lisbon · Sete Rios', time: '18:45', type: 'origin' },
      { label: 'Coimbra · Train Station', time: '20:30', type: 'stop' },
      { label: 'Porto · Boavista', time: '21:55', type: 'destination' },
    ],
    amenities: ['Air conditioning', 'Comfort', 'Phone charger', 'Instant booking'],
  },
  {
    id: 'r5',
    driver: drivers[5],
    from: 'Lisbon',
    to: 'Porto',
    date: 'Fri, 14 Jun',
    departTime: '20:00',
    arriveTime: '23:20',
    duration: '3h 20m',
    price: 16,
    seatsLeft: 2,
    instantBook: true,
    stops: [
      { label: 'Lisbon · Oriente Station', time: '20:00', type: 'origin' },
      { label: 'Leiria · Bus Terminal', time: '21:10', type: 'stop' },
      { label: 'Porto · Campanhã', time: '23:20', type: 'destination' },
    ],
    amenities: ['Electric vehicle', 'Eco ride', 'Air conditioning'],
  },
]

export const destinations = [
  { city: 'Lisbon', country: 'Portugal', image: '/images/city-lisbon.png', rides: 128, from: 12 },
  { city: 'Porto', country: 'Portugal', image: '/images/city-porto.png', rides: 96, from: 15 },
  { city: 'Madrid', country: 'Spain', image: '/images/city-madrid.png', rides: 210, from: 24 },
  { city: 'Barcelona', country: 'Spain', image: '/images/city-barcelona.png', rides: 174, from: 28 },
]

export const testimonials = [
  {
    name: 'Beatriz N.',
    avatar: '/images/avatar-4.png',
    role: 'Weekly commuter',
    quote:
      'Voya turned my expensive weekly commute into something I actually look forward to. The drivers are verified and the app makes splitting costs effortless.',
    rating: 5,
  },
  {
    name: 'Rui P.',
    avatar: '/images/avatar-3.png',
    role: 'Driver · 480 trips',
    quote:
      'I cover almost all of my fuel costs now. Publishing a ride takes under a minute and the passengers have always been respectful.',
    rating: 5,
  },
  {
    name: 'Carla D.',
    avatar: '/images/avatar-6.png',
    role: 'Student traveler',
    quote:
      'As a student, this is a lifesaver. Cheaper than the train, more comfortable than the bus, and I have met some genuinely lovely people.',
    rating: 5,
  },
]

export const faqs = [
  {
    q: 'How does Voya work?',
    a: 'Drivers with empty seats publish their trip and the price per seat. Passengers heading the same way search, book, and travel together — splitting the cost of the journey.',
  },
  {
    q: 'Is it safe to travel with Voya?',
    a: 'Every member has a verified profile with reviews, ratings, and ID verification. You can see who you are traveling with before you book and read what others have said.',
  },
  {
    q: 'How much does it cost?',
    a: 'Drivers set a fair price per seat that simply helps cover fuel and tolls. There are no hidden fees — the price you see is the price you pay.',
  },
  {
    q: 'What if my plans change?',
    a: 'You can cancel a booking from your dashboard. Depending on how close it is to departure, you may be eligible for a full or partial refund under our flexible policy.',
  },
  {
    q: 'Can I bring luggage?',
    a: 'Yes. Each ride listing shows the luggage allowance. Most drivers welcome a small suitcase and a backpack, and you can message them to confirm larger items.',
  },
]

export const stats = [
  { value: '18M+', label: 'Members traveling' },
  { value: '2.4M', label: 'Rides every month' },
  { value: '4.9', label: 'Average driver rating' },
  { value: '38%', label: 'Average cost saved' },
]

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

export const notifications: Notification[] = [
  {
    id: 'n1',
    type: 'booking',
    title: 'New booking request',
    description: 'Maria S. booked 2 seats on your Lisbon → Porto ride on Fri, 14 Jun at 08:30',
    timestamp: '5 minutes ago',
    read: false,
    actionUrl: '/dashboard/bookings',
    avatar: '/images/avatar-4.png',
  },
  {
    id: 'n2',
    type: 'message',
    title: 'New message from João P.',
    description: 'Hey! Can you help me with luggage? I&apos;m traveling with 2 large suitcases.',
    timestamp: '23 minutes ago',
    read: false,
    actionUrl: '/dashboard/messages',
    avatar: '/images/avatar-3.png',
  },
  {
    id: 'n3',
    type: 'review',
    title: '5-star review from Carla D.',
    description: 'Amazing driver! Very friendly and the car was immaculate. Highly recommend! ⭐⭐⭐⭐⭐',
    timestamp: '2 hours ago',
    read: false,
    actionUrl: '/driver/profile',
    avatar: '/images/avatar-6.png',
  },
  {
    id: 'n4',
    type: 'payment',
    title: 'Payment received',
    description: 'You received €54.00 from 2 passengers on your completed Lisbon → Porto ride',
    timestamp: '3 hours ago',
    read: true,
    actionUrl: '/dashboard/earnings',
  },
  {
    id: 'n5',
    type: 'booking',
    title: 'Booking confirmed',
    description: 'Your booking with Sofia Martins (Porto → Lisbon) is confirmed. Depart: Fri, 14 Jun at 08:30',
    timestamp: '1 day ago',
    read: true,
    actionUrl: '/dashboard/bookings',
    avatar: '/images/avatar-1.png',
  },
  {
    id: 'n6',
    type: 'alert',
    title: 'Ride reminder',
    description: 'Your ride with Lucas Ferreira departs in 2 hours. Meet at Porto · Trindade',
    timestamp: '2 days ago',
    read: true,
    actionUrl: '/dashboard/bookings',
  },
  {
    id: 'n7',
    type: 'payment',
    title: 'Payment sent',
    description: 'You paid €18.00 to Sofia Martins for your completed Lisbon → Porto ride',
    timestamp: '3 days ago',
    read: true,
    actionUrl: '/dashboard/transactions',
  },
  {
    id: 'n8',
    type: 'review',
    title: 'You were rated 5 stars',
    description: 'Beatriz N. rated your recent ride 5 stars and left a review',
    timestamp: '4 days ago',
    read: true,
    actionUrl: '/driver/profile',
    avatar: '/images/avatar-4.png',
  },
]

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

export const bookings: Booking[] = [
  {
    id: 'b1',
    rideId: 'r1',
    passengers: 2,
    name: 'Lisbon to Porto',
    driver: drivers[0],
    from: 'Lisbon · Rossio',
    to: 'Porto · Trindade',
    date: 'Fri, 14 Jun 2024',
    departTime: '08:30',
    status: 'upcoming',
    price: 18.00,
    paymentStatus: 'pending',
  },
  {
    id: 'b2',
    rideId: 'r2',
    passengers: 1,
    name: 'Porto to Covilhã',
    driver: drivers[1],
    from: 'Porto · Aliados',
    to: 'Covilhã · Center',
    date: 'Sat, 15 Jun 2024',
    departTime: '14:00',
    status: 'upcoming',
    price: 25.00,
    paymentStatus: 'pending',
  },
  {
    id: 'b3',
    rideId: 'r3',
    passengers: 3,
    name: 'Faro to Lisbon',
    driver: drivers[2],
    from: 'Faro · Airport',
    to: 'Lisbon · Park',
    date: 'Sun, 16 Jun 2024',
    departTime: '10:15',
    status: 'upcoming',
    price: 45.00,
    paymentStatus: 'pending',
  },
  {
    id: 'b4',
    rideId: 'r4',
    passengers: 2,
    name: 'Lisbon to Sintra',
    driver: drivers[3],
    from: 'Lisbon · Terreiro',
    to: 'Sintra · Town',
    date: 'Wed, 11 Jun 2024',
    departTime: '09:00',
    status: 'completed',
    price: 15.00,
    paymentStatus: 'paid',
  },
  {
    id: 'b5',
    rideId: 'r5',
    passengers: 1,
    name: 'Porto to Braga',
    driver: drivers[4],
    from: 'Porto · Center',
    to: 'Braga · Station',
    date: 'Tue, 10 Jun 2024',
    departTime: '15:30',
    status: 'completed',
    price: 20.00,
    paymentStatus: 'paid',
  },
]

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

export const transactions: Transaction[] = [
  {
    id: 't1',
    type: 'earning',
    amount: 54.00,
    description: 'Lisbon → Porto (2 passengers)',
    date: '11 Jun 2024',
    status: 'completed',
    rideId: 'r4',
  },
  {
    id: 't2',
    type: 'payment',
    amount: 18.00,
    description: 'Lisbon → Porto',
    date: '10 Jun 2024',
    status: 'completed',
    rideId: 'r1',
    driverId: 'sofia-m',
    driverName: 'Sofia Martins',
  },
  {
    id: 't3',
    type: 'earning',
    amount: 40.00,
    description: 'Porto → Braga (3 passengers)',
    date: '09 Jun 2024',
    status: 'completed',
    rideId: 'r5',
  },
  {
    id: 't4',
    type: 'payment',
    amount: 25.00,
    description: 'Porto → Covilhã',
    date: '08 Jun 2024',
    status: 'completed',
    rideId: 'r2',
    driverId: 'tomas-r',
    driverName: 'Tomás Ribeiro',
  },
  {
    id: 't5',
    type: 'earning',
    amount: 36.00,
    description: 'Covilhã → Lisbon (2 passengers)',
    date: '07 Jun 2024',
    status: 'completed',
    rideId: 'r6',
  },
  {
    id: 't6',
    type: 'payment',
    amount: 32.00,
    description: 'Faro → Lisbon',
    date: '05 Jun 2024',
    status: 'completed',
    rideId: 'r3',
    driverId: 'lucas-f',
    driverName: 'Lucas Ferreira',
  },
  {
    id: 't7',
    type: 'earning',
    amount: 42.00,
    description: 'Lisbon → Sintra (2 passengers)',
    date: '03 Jun 2024',
    status: 'completed',
    rideId: 'r7',
  },
  {
    id: 't8',
    type: 'earning',
    amount: 60.00,
    description: 'Porto → Lisbon (3 passengers)',
    date: '01 Jun 2024',
    status: 'completed',
    rideId: 'r8',
  },
]
