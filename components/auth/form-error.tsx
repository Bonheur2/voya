'use client'

import React from 'react'
import { AlertCircle } from 'lucide-react'

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div className="rounded-lg bg-destructive/10 border border-destructive/30 p-3 flex gap-3">
      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
      <p className="text-sm text-destructive">{message}</p>
    </div>
  )
}
