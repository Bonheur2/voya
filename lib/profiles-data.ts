import type { UserProfile } from './types'
import { vehicles } from './vehicles-data'

export const userProfiles: UserProfile[] = [
  {
    id: 'sofia-m',
    firstName: 'Sofia',
    lastName: 'Martins',
    email: 'sofia.martins@example.com',
    avatar: '/images/avatar-1.png',
    phone: '+351 912 345 678',
    bio: 'Weekend traveler who loves a good playlist and interesting conversation. I keep my car spotless and always leave on time.',
    memberSince: 'March 2021',
    verified: true,
    rating: 4.9,
    reviews: 214,
    trips: 342,
    vehicles: [vehicles[0]],
  },
  {
    id: 'tomas-r',
    firstName: 'Tomás',
    lastName: 'Ribeiro',
    email: 'tomas.ribeiro@example.com',
    avatar: '/images/avatar-2.png',
    phone: '+351 923 456 789',
    bio: 'Commuter driving this route weekly. Punctual, calm driver, happy to help with luggage.',
    memberSince: 'January 2020',
    verified: true,
    rating: 4.8,
    reviews: 158,
    trips: 201,
    vehicles: [vehicles[1]],
  },
  {
    id: 'lucas-f',
    firstName: 'Lucas',
    lastName: 'Ferreira',
    email: 'lucas.ferreira@example.com',
    avatar: '/images/avatar-3.png',
    bio: 'Superhost driver. I do this route most weekends — comfortable ride, air conditioning, and phone chargers available.',
    memberSince: 'August 2019',
    verified: true,
    rating: 4.95,
    reviews: 302,
    trips: 480,
    vehicles: [vehicles[2]],
  },
]

export const currentUser: UserProfile = userProfiles[0]
