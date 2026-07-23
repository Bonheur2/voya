'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { formatCurrency } from '@/lib/payment-utils'

interface PriceSummaryProps {
  pricePerSeat: number
  seats: number
  subtotal: number
  serviceFee: number
  protection: number
  total: number
}

export function PriceSummary({
  pricePerSeat,
  seats,
  subtotal,
  serviceFee,
  protection,
  total,
}: PriceSummaryProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">Price Breakdown</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {formatCurrency(pricePerSeat)} × {seats} {seats === 1 ? 'seat' : 'seats'}
          </span>
          <span className="font-medium text-foreground">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Service fee (8%)</span>
          <span className="font-medium text-foreground">{formatCurrency(serviceFee)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Booking protection</span>
          <span className="font-medium text-foreground">{formatCurrency(protection)}</span>
        </div>

        <div className="border-t border-border pt-3">
          <div className="flex justify-between">
            <span className="font-semibold text-foreground">Total</span>
            <span className="text-lg font-bold text-primary">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs text-muted-foreground">
        💡 You are protected by Voya's Booking Protection. Full refund if the ride is cancelled.
      </div>
    </Card>
  )
}
