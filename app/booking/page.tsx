'use client'

import { useState } from 'react'
import { ArrowLeft, Users, MapPin, Clock, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { rides, drivers } from '@/lib/placeholder-data'
import { DriverCard } from '@/components/site/driver-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RideTimeline } from '@/components/site/ride-timeline'
import { PaymentMethodSelector } from '@/components/payment/payment-method-selector'
import { CardInput, type CardDetails } from '@/components/payment/card-input'
import { PriceSummary } from '@/components/payment/price-summary'
import { PaymentConfirmation } from '@/components/payment/payment-confirmation'
import { calculatePriceBreakdown } from '@/lib/payment-utils'

export default function BookingPage() {
  const ride = rides[0] // Using first ride as example
  const [passengers, setPassengers] = useState(1)
  const [selectedSeats, setSelectedSeats] = useState<number[]>([0])
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    specialRequests: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  })

  const pricePerSeat = ride.price
  const priceBreakdown = calculatePriceBreakdown(pricePerSeat, passengers)
  const totalPrice = priceBreakdown.total.toFixed(2)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/search" className="rounded-lg hover:bg-muted p-2 -m-2 transition-colors">
            <ArrowLeft className="size-5 text-foreground" />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Complete your booking</h1>
            <p className="text-sm text-muted-foreground">{ride.from} → {ride.to}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Steps */}
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center gap-3 flex-1">
                  <div
                    className={`size-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      s <= step
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 5 && (
                    <div
                      className={`flex-1 h-1 rounded-full transition-colors ${
                        s < step ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground text-center">
              {['Seats', 'Details', 'Review', 'Payment', 'Confirm'][step - 1]}
            </div>

            {/* Step 1: Seats Selection */}
            {step === 1 && (
              <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Select number of seats</h2>
                  <p className="text-sm text-muted-foreground">
                    {ride.seatsLeft} seats available on this ride
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {Array.from({ length: Math.min(ride.seatsLeft + 2, 6) }).map((_, i) => {
                    const seatCount = i + 1
                    return (
                      <button
                        key={seatCount}
                        onClick={() => {
                          setPassengers(seatCount)
                          setSelectedSeats(Array.from({ length: seatCount }, (_, idx) => idx))
                        }}
                        className={`rounded-lg border-2 py-3 px-2 text-center font-semibold transition-colors ${
                          passengers === seatCount
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border text-foreground hover:border-primary/30'
                        }`}
                      >
                        <Users className="size-5 mx-auto mb-1" />
                        {seatCount}
                      </button>
                    )
                  })}
                </div>

                <div className="rounded-lg bg-muted/50 border border-border p-4 flex gap-3">
                  <AlertCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    You&apos;re booking for <span className="font-semibold">{passengers}</span> passenger{passengers > 1 ? 's' : ''}. Each will receive a separate confirmation.
                  </p>
                </div>

                <Button onClick={() => setStep(2)} className="w-full">
                  Continue to booking details
                </Button>
              </div>
            )}

            {/* Step 2: Passenger Details */}
            {step === 2 && (
              <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Booking details</h2>
                  <p className="text-sm text-muted-foreground">
                    We need your contact information to confirm your booking
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First name</label>
                      <input
                        type="text"
                        value={bookingData.firstName}
                        onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                        placeholder="John"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last name</label>
                      <input
                        type="text"
                        value={bookingData.lastName}
                        onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone number</label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      placeholder="+351 912 345 678"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Special requests</label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                      placeholder="E.g., need to stop at a specific location, bring large luggage, etc."
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1">
                    Review booking
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Review your booking</h2>
                  <p className="text-sm text-muted-foreground">
                    Please review all details before confirming
                  </p>
                </div>

                {/* Trip summary */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Trip details</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <p className="text-2xl font-extrabold text-foreground">{ride.departTime}</p>
                      <p className="text-xs text-muted-foreground mt-2">Departure</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4 text-center flex flex-col items-center justify-center">
                      <Clock className="size-5 text-primary mb-2" />
                      <p className="text-sm font-medium text-foreground">{ride.duration}</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <p className="text-2xl font-extrabold text-foreground">{ride.arriveTime}</p>
                      <p className="text-xs text-muted-foreground mt-2">Arrival</p>
                    </div>
                  </div>
                  <RideTimeline stops={ride.stops} />
                </div>

                {/* Driver info */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Your driver</h3>
                  <DriverCard driver={ride.driver} showBio={false} />
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(4)} className="flex-1">
                    Continue to payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Payment information</h2>
                  <p className="text-sm text-muted-foreground">
                    Secure payment for your booking
                  </p>
                </div>

                <PaymentMethodSelector selectedMethod={paymentMethod} onMethodChange={setPaymentMethod} />

                {paymentMethod === 'card' && (
                  <CardInput onCardChange={setCardDetails} />
                )}

                {paymentMethod === 'apple_pay' && (
                  <div className="rounded-lg border-2 border-dashed border-border p-8 text-center">
                    <div className="text-4xl mb-2">🍎</div>
                    <p className="text-foreground font-semibold">Apple Pay</p>
                    <p className="text-sm text-muted-foreground mt-1">Click below to complete payment</p>
                    <Button variant="outline" className="mt-4">
                      Pay with Apple Pay
                    </Button>
                  </div>
                )}

                {paymentMethod === 'google_pay' && (
                  <div className="rounded-lg border-2 border-dashed border-border p-8 text-center">
                    <div className="text-4xl mb-2">🔵</div>
                    <p className="text-foreground font-semibold">Google Pay</p>
                    <p className="text-sm text-muted-foreground mt-1">Click below to complete payment</p>
                    <Button variant="outline" className="mt-4">
                      Pay with Google Pay
                    </Button>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(5)} className="flex-1">
                    Confirm payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <PaymentConfirmation
                departure={ride.from}
                destination={ride.to}
                date={ride.date}
                time={ride.departTime}
                seats={passengers}
                price={parseFloat(totalPrice)}
                onClose={() => {
                  // Reset or redirect
                  alert('Redirecting to dashboard...')
                }}
              />
            )}
          </div>

          {/* Sidebar - Price Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">You&apos;re booking</p>
                <p className="text-2xl font-extrabold text-foreground">{passengers} seat{passengers > 1 ? 's' : ''}</p>
              </div>

              {step < 5 && (
                <PriceSummary
                  pricePerSeat={priceBreakdown.pricePerSeat}
                  seats={priceBreakdown.seats}
                  subtotal={priceBreakdown.subtotal}
                  serviceFee={priceBreakdown.serviceFee}
                  protection={priceBreakdown.protection}
                  total={priceBreakdown.total}
                />
              )}

              <div className="space-y-2 pt-2 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">From</span>
                  <span className="font-medium text-foreground">{ride.from}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">To</span>
                  <span className="font-medium text-foreground">{ride.to}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium text-foreground">{ride.date}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-2">
                Free cancellation up to 24 hours before departure
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
