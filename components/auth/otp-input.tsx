'use client'

import React, { useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'

interface OTPInputProps {
  value: string
  onChange: (value: string) => void
  length?: number
}

export function OTPInput({ value, onChange, length = 6 }: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (index: number, val: string) => {
    const newVal = val.replace(/[^0-9]/g, '')
    if (newVal.length > 1) return

    const otpArray = value.split('')
    otpArray[index] = newVal
    const newOTP = otpArray.slice(0, length).join('')
    onChange(newOTP)

    // Auto-focus next input
    if (newVal && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    const digits = pastedData.replace(/[^0-9]/g, '').slice(0, length)
    onChange(digits)

    // Focus last filled input or last input
    const focusIndex = Math.min(digits.length, length - 1)
    inputRefs.current[focusIndex]?.focus()
  }

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-lg font-semibold"
        />
      ))}
    </div>
  )
}
