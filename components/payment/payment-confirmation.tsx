'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, Download, Printer } from 'lucide-react'
import { formatCurrency, generateBookingReference } from '@/lib/payment-utils'

interface PaymentConfirmationProps {
  departure: string
  destination: string
  date: string
  time: string
  seats: number
  price: number
  onClose?: () => void
}

export function PaymentConfirmation({
  departure,
  destination,
  date,
  time,
  seats,
  price,
  onClose,
}: PaymentConfirmationProps) {
  const bookingRef = generateBookingReference()
  const [showReceipt, setShowReceipt] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    alert('Receipt download feature coming soon!')
  }

  if (showReceipt) {
    return (
      <Card className="p-8">
        {/* Receipt */}
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="border-b border-border pb-6 text-center">
            <h1 className="text-3xl font-bold text-foreground">VOYA</h1>
            <p className="text-sm text-muted-foreground">Ride Receipt</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Booking Reference</span>
              <span className="font-mono font-semibold text-foreground">{bookingRef}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium text-foreground">{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time</span>
              <span className="font-medium text-foreground">{time}</span>
            </div>
          </div>

          <div className="border-t border-b border-border py-4">
            <div className="mb-2 text-sm font-semibold text-muted-foreground">ROUTE</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">From</div>
                <div className="font-semibold text-foreground">{departure}</div>
              </div>
              <div className="text-2xl text-muted-foreground">→</div>
              <div>
                <div className="text-sm text-muted-foreground">To</div>
                <div className="font-semibold text-foreground">{destination}</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Seats Reserved</span>
              <span className="font-medium text-foreground">{seats}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount</span>
              <span className="text-lg font-bold text-primary">{formatCurrency(price)}</span>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
            <p className="text-sm text-green-700 dark:text-green-400">
              ✓ Payment confirmed. You will receive a confirmation email shortly.
            </p>
          </div>

          <div className="flex gap-3 pt-4 print:hidden">
            <Button onClick={handlePrint} variant="outline" className="flex-1">
              <Printer className="mr-2 h-4 w-4" />
              Print Receipt
            </Button>
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          <Button onClick={onClose} className="w-full" variant="outline">
            Close Receipt
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Success Message */}
      <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950/20">
        <div className="flex items-start gap-4">
          <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600 dark:text-green-400" />
          <div>
            <h2 className="text-lg font-bold text-green-900 dark:text-green-100">
              Payment Successful!
            </h2>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Your booking has been confirmed. Check your email for details.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Booking Confirmation</h3>
          <div className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-mono font-semibold text-primary">
            {bookingRef}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
            <div>
              <div className="text-sm text-muted-foreground">From</div>
              <div className="font-semibold text-foreground">{departure}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">To</div>
              <div className="font-semibold text-foreground">{destination}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-b border-border pb-4">
            <div>
              <div className="text-sm text-muted-foreground">Date</div>
              <div className="font-semibold text-foreground">{date}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Time</div>
              <div className="font-semibold text-foreground">{time}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Seats</div>
              <div className="font-semibold text-foreground">{seats}</div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <span className="font-semibold text-foreground">Total Paid</span>
            <span className="text-xl font-bold text-primary">{formatCurrency(price)}</span>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button onClick={() => setShowReceipt(true)} variant="outline" className="flex-1">
          View Receipt
        </Button>
        <Button onClick={onClose} className="flex-1">
          Done
        </Button>
      </div>
    </div>
  )
}
