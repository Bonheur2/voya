# Driver & Rider Profile Pages - Feature Documentation

## Overview

This update adds comprehensive profile pages for both drivers and riders in the Voya carpooling platform. Users can now view detailed profiles with ratings, reviews, verification status, preferences, and more.

## New Pages

### 1. **Driver Profile Page** (`/driver/[id]`)
Enhanced public driver profile displaying:
- Driver avatar with verification badge
- Rating and trip statistics
- Verified Professional badge
- Comprehensive bio and background
- Vehicle information
- Driving preferences (chatty, music, pets, smoking)
- Driver reviews from passengers
- Upcoming rides
- Message and booking action buttons
- Safety verification indicators

**File**: `/app/driver/[id]/page.tsx`

### 2. **Rider Profile Page** (`/rider/[id]`)
New public rider profile displaying:
- Rider avatar with verification badge
- Rating and trip statistics
- Multiple achievement badges (Superrider, Early Adopter, Community Helper)
- Bio and personal information
- Location and workplace
- Rider preferences (conversation, music, luggage, temperature)
- Favorite routes with heart icons
- Complete verification status
- Reviews from drivers
- Message and Follow action buttons
- Safety information

**File**: `/app/rider/[id]/page.tsx`

### 3. **Public Profile Page** (`/profile/[username]`)
Unified sharable profile page displaying:
- Profile header with initials avatar
- Key statistics (total trips, reviews, response rate, member duration)
- Profile role selector (Driver/Rider)
- Both driver and rider profiles in card format
- Verification status tabs
- Recent activity timeline
- Profile report functionality
- Message and copy profile link actions

**File**: `/app/profile/[username]/page.tsx`

## New Components

### ProfileSwitcher Component
Displays user's role badges (Driver/Rider) to help differentiate profile types.

**File**: `/components/site/profile-switcher.tsx`

### ProfileCards Component
Reusable card component for displaying driver and rider profiles side-by-side with quick stats and navigation.

**File**: `/components/site/profile-cards.tsx`

## Features Implemented

### Profile Information
- User name, avatar, and bio
- Verification status indicators
- Member since date
- Response rate
- Total trips completed
- Review count

### Trust & Safety
- Verification badges (identity, phone, email, payment, background check)
- Verified Professional status for drivers
- Verified Rider status for passengers
- Safety guidelines prompts
- Report functionality

### Preferences & Details
**Driver Preferences**:
- Chatty/Quiet preference
- Music preference
- Pet policy
- Smoking policy

**Rider Preferences**:
- Conversation preference
- Music preference
- Luggage frequency
- Temperature preference

### Reviews & Ratings
- Star ratings (1-5)
- Review count and display
- Recent reviews with author and date
- View all reviews link

### Additional Features
- Favorite routes (riders)
- Vehicle information (drivers)
- Upcoming rides (drivers)
- Activity timeline
- Shareable profile links
- Message functionality
- Action buttons (Book ride, Follow, Report)

## Design System Integration

All pages follow the existing Voya design system:
- Coral primary color (#d97563)
- Tailwind CSS utility classes
- 2xl rounded borders for cards
- Consistent spacing and typography
- Accessible color contrasts
- Responsive layouts (mobile-first)

## Data Structure

### Driver Profile
```typescript
{
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
```

### Rider Profile
```typescript
{
  id: string
  name: string
  avatar: string
  rating: number
  reviews: number
  trips: number
  memberSince: string
  verified: boolean
  bio: string
  location: string
  workplace: string
  responseRate: number
  favoriteRoutes: string[]
  preferences: {
    chatty: boolean
    music: boolean
    luggage: boolean
    temperature: string
  }
}
```

## User Interactions

1. **Browse Profiles**: Users can view driver and rider profiles from search results
2. **Message**: Direct messaging button available on all profiles
3. **Book Rides**: Quick access to book rides from driver profiles
4. **Share Profiles**: Copy shareable profile links via `/profile/[username]`
5. **Report Users**: Flag inappropriate profiles
6. **View Reviews**: Access full review history with pagination support
7. **Check Verification**: View all verification status indicators

## Future Enhancements

- Profile edit functionality for users' own profiles
- Bidirectional follow system
- Advanced review filtering and sorting
- Profile badges for achievements
- Ratings breakdown by category
- Driving statistics and patterns
- Integration with real backend APIs
- Profile completeness indicator
- Photo gallery for drivers' vehicles
- Preferred ride preferences customization

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Fonts**: Plus Jakarta Sans

## Accessibility Features

- Semantic HTML elements
- ARIA labels on icons
- Proper heading hierarchy
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support
- Screen reader friendly
