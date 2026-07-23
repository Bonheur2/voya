'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PaymentMethodSelectorProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
}

export function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
}: PaymentMethodSelectorProps) {
  const methods = [
    {
      id: 'card',
      label: 'Credit or Debit Card',
      icon: '💳',
      description: 'Visa, Mastercard, Amex',
    },
    {
      id: 'apple_pay',
      label: 'Apple Pay',
      icon: '🍎',
      description: 'Fast and secure',
    },
    {
      id: 'google_pay',
      label: 'Google Pay',
      icon: '🔵',
      description: 'Fast and secure',
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Payment Method</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodChange(method.id)}
            className={`rounded-lg border-2 p-4 text-left transition-all ${
              selectedMethod === method.id
                ? 'border-primary bg-primary/5'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className="mb-2 text-2xl">{method.icon}</div>
            <div className="font-semibold text-foreground">{method.label}</div>
            <div className="text-sm text-muted-foreground">{method.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
