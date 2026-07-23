# Voya Payment & Checkout System

## Overview

Complete 5-step booking and payment checkout flow for the Voya carpooling platform.

## Features

### 5-Step Booking Flow

1. **Seats Selection** - Choose number of passengers
2. **Booking Details** - Collect passenger information (name, email, phone)
3. **Review** - Verify trip details, driver info, and itinerary
4. **Payment** - Enter payment information with multiple payment methods
5. **Confirmation** - Display booking confirmation with receipt options

### Payment Components

#### PaymentMethodSelector
- Displays 3 payment options: Card, Apple Pay, Google Pay
- Visual selection with icons and descriptions
- Easy switching between methods

```tsx
<PaymentMethodSelector 
  selectedMethod={paymentMethod}
  onMethodChange={setPaymentMethod}
/>
```

#### CardInput
- Real-time card number formatting (spaces every 4 digits)
- Card preview showing masked data
- Cardholder name input
- Expiry date formatting (MM/YY)
- CVV input with password masking
- Auto-formatting of inputs

```tsx
<CardInput onCardChange={setCardDetails} />
```

#### PriceSummary
- Displays price breakdown:
  - Price per seat × number of seats
  - Service fee (8%)
  - Booking protection (€0.50)
  - Total amount
- Booking protection information banner

```tsx
<PriceSummary
  pricePerSeat={pricePerSeat}
  seats={seats}
  subtotal={subtotal}
  serviceFee={serviceFee}
  protection={protection}
  total={total}
/>
```

#### PaymentConfirmation
- Success confirmation screen
- Booking reference display
- Trip details summary
- Receipt viewing capability
- Print and download options

```tsx
<PaymentConfirmation
  departure="Lisbon"
  destination="Porto"
  date="Fri, 14 Jun"
  time="08:30"
  seats={1}
  price={19.94}
  onClose={() => {}}
/>
```

### Utility Functions

Located in `/lib/payment-utils.ts`:

#### `calculatePriceBreakdown(pricePerSeat, seats)`
Returns object with:
- `pricePerSeat` - Price per seat
- `seats` - Number of seats
- `subtotal` - pricePerSeat × seats
- `serviceFee` - subtotal × 8%
- `protection` - €0.50
- `total` - subtotal + serviceFee + protection

#### `formatCurrency(amount)`
Formats amount as "€XX.XX"

#### `formatCardNumber(value)`
Formats card input as "1234 5678 9012 3456"

#### `formatExpiryDate(value)`
Formats expiry as "MM/YY"

#### `generateBookingReference()`
Generates unique booking reference: "VOYAXXXXXX" (VOYA + 6 random + timestamp)

## Pricing Model

- **Service Fee**: 8% of subtotal
- **Booking Protection**: Fixed €0.50 per booking
- **Total**: Subtotal + Service Fee + Protection

Example for €18.00 (1 seat):
- Subtotal: €18.00
- Service Fee (8%): €1.44
- Protection: €0.50
- **Total: €19.94**

## Integration Points

### Backend Integration Required

1. **Payment Processing** - Integrate Stripe.js for real card processing
2. **Booking Storage** - Save booking data to database
3. **Email Notifications** - Send confirmation emails
4. **Receipt Generation** - Generate PDF receipts

### Current Implementation

This is a **UI/UX implementation** ready for backend integration:
- Form validation works client-side
- Payment data structure defined
- Booking flow complete
- Receipt template ready
- No actual payment processing (mock data only)

## Component Structure

```
app/booking/page.tsx
├── Steps 1-3: Booking form
├── Step 4: Payment (new)
└── Step 5: Confirmation (new)

components/payment/
├── payment-method-selector.tsx
├── card-input.tsx
├── price-summary.tsx
└── payment-confirmation.tsx

lib/
└── payment-utils.ts
```

## Usage

### Basic Implementation

```tsx
import { calculatePriceBreakdown, formatCurrency } from '@/lib/payment-utils'

const breakdown = calculatePriceBreakdown(25, 2) // 2 seats at €25
console.log(breakdown.total) // €51.50
console.log(formatCurrency(breakdown.total)) // "€51.50"
```

### In Booking Page

```tsx
const [paymentMethod, setPaymentMethod] = useState('card')
const [cardDetails, setCardDetails] = useState<CardDetails>({})

const priceBreakdown = calculatePriceBreakdown(ride.price, passengers)

// Payment step
<PaymentMethodSelector 
  selectedMethod={paymentMethod}
  onMethodChange={setPaymentMethod}
/>

{paymentMethod === 'card' && (
  <CardInput onCardChange={setCardDetails} />
)}
```

## Styling

All components use:
- Tailwind CSS utilities
- Design tokens from globals.css
- Responsive design (mobile-first)
- Dark mode support

## Accessibility

- Semantic HTML (label, input, button elements)
- ARIA labels for inputs
- Keyboard navigation support
- Screen reader friendly

## Future Enhancements

1. **Stripe Integration** - Replace mock payment with real Stripe checkout
2. **More Payment Methods** - PayPal, Klarna, Bank Transfer
3. **Split Payments** - Multiple card payments for group bookings
4. **Receipt PDF** - Generate and email PDF receipts
5. **Payment History** - Track all past payments
6. **Refunds** - Process refunds for cancelled bookings
7. **Wallet** - Store payment methods for faster checkout

## Testing Checklist

- [x] Step navigation works correctly
- [x] Card input formatting works
- [x] Price calculations are accurate
- [x] Payment methods switch properly
- [x] Confirmation displays correctly
- [x] Receipt view/print functions
- [ ] Backend integration
- [ ] Real payment processing
- [ ] Email confirmations
- [ ] Error handling
