'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formatCardNumber, formatExpiryDate } from '@/lib/payment-utils'

interface CardInputProps {
  onCardChange: (card: CardDetails) => void
}

export interface CardDetails {
  cardNumber: string
  cardholderName: string
  expiryDate: string
  cvv: string
}

export function CardInput({ onCardChange }: CardInputProps) {
  const [card, setCard] = useState<CardDetails>({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (field: keyof CardDetails, value: string) => {
    let formattedValue = value

    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value)
    } else if (field === 'expiryDate') {
      formattedValue = formatExpiryDate(value)
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4)
    }

    const updatedCard = { ...card, [field]: formattedValue }
    setCard(updatedCard)
    onCardChange(updatedCard)
  }

  const displayCardNumber = card.cardNumber
    ? card.cardNumber.slice(-4).padStart(card.cardNumber.length, '*')
    : '•••• •••• •••• ••••'

  return (
    <div className="space-y-6">
      {/* Card Preview */}
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-muted-foreground">Card Number</span>
            <span className="text-xs text-muted-foreground">💳</span>
          </div>
          <div className="text-xl font-mono tracking-widest text-foreground">
            {displayCardNumber}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Cardholder Name</div>
              <div className="text-sm font-semibold text-foreground">
                {card.cardholderName || '••••••••••••'}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Expiry</div>
              <div className="text-sm font-semibold text-foreground">
                {card.expiryDate || '••/••'}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card Form */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={card.cardNumber}
            onChange={(e) => handleChange('cardNumber', e.target.value)}
            maxLength={19}
          />
        </div>

        <div>
          <Label htmlFor="cardholderName">Cardholder Name</Label>
          <Input
            id="cardholderName"
            placeholder="John Doe"
            value={card.cardholderName}
            onChange={(e) => handleChange('cardholderName', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              placeholder="MM/YY"
              value={card.expiryDate}
              onChange={(e) => handleChange('expiryDate', e.target.value)}
              maxLength={5}
            />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              placeholder="123"
              value={card.cvv}
              onChange={(e) => handleChange('cvv', e.target.value)}
              maxLength={4}
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
