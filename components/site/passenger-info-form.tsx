'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Trash2, Plus } from 'lucide-react'
import { useState } from 'react'

interface Passenger {
  id: string
  name: string
  email: string
  phone: string
}

interface PassengerInfoFormProps {
  initialPassengers?: Passenger[]
  onPassengersChange?: (passengers: Passenger[]) => void
  maxPassengers?: number
}

export function PassengerInfoForm({
  initialPassengers = [],
  onPassengersChange,
  maxPassengers = 5,
}: PassengerInfoFormProps) {
  const [passengers, setPassengers] = useState<Passenger[]>(
    initialPassengers.length > 0
      ? initialPassengers
      : [
          {
            id: '1',
            name: '',
            email: '',
            phone: '',
          },
        ]
  )

  const updatePassenger = (id: string, field: keyof Passenger, value: string) => {
    const updated = passengers.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    setPassengers(updated)
    onPassengersChange?.(updated)
  }

  const addPassenger = () => {
    if (passengers.length < maxPassengers) {
      const newPassenger = {
        id: Date.now().toString(),
        name: '',
        email: '',
        phone: '',
      }
      const updated = [...passengers, newPassenger]
      setPassengers(updated)
      onPassengersChange?.(updated)
    }
  }

  const removePassenger = (id: string) => {
    if (passengers.length > 1) {
      const updated = passengers.filter((p) => p.id !== id)
      setPassengers(updated)
      onPassengersChange?.(updated)
    }
  }

  return (
    <div className="space-y-4">
      {passengers.map((passenger, index) => (
        <Card key={passenger.id} className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Passenger {index + 1}</h3>
            {passengers.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removePassenger(passenger.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${passenger.id}`} className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id={`name-${passenger.id}`}
                type="text"
                placeholder="John Doe"
                value={passenger.name}
                onChange={(e) => updatePassenger(passenger.id, 'name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`email-${passenger.id}`} className="text-sm font-medium">
                Email
              </Label>
              <Input
                id={`email-${passenger.id}`}
                type="email"
                placeholder="john@example.com"
                value={passenger.email}
                onChange={(e) => updatePassenger(passenger.id, 'email', e.target.value)}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor={`phone-${passenger.id}`} className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id={`phone-${passenger.id}`}
                type="tel"
                placeholder="+351 910 123 456"
                value={passenger.phone}
                onChange={(e) => updatePassenger(passenger.id, 'phone', e.target.value)}
              />
            </div>
          </div>
        </Card>
      ))}

      {passengers.length < maxPassengers && (
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={addPassenger}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Passenger
        </Button>
      )}
    </div>
  )
}
