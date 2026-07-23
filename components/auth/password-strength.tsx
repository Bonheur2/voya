'use client'

import React from 'react'

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = (pwd: string): { level: number; label: string; color: string } => {
    if (!pwd) return { level: 0, label: '', color: '' }

    let strength = 0
    if (pwd.length >= 8) strength++
    if (pwd.length >= 12) strength++
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++
    if (/\d/.test(pwd)) strength++
    if (/[!@#$%^&*]/.test(pwd)) strength++

    if (strength <= 1) return { level: 1, label: 'Weak', color: 'bg-red-500' }
    if (strength <= 2) return { level: 2, label: 'Fair', color: 'bg-yellow-500' }
    if (strength <= 3) return { level: 3, label: 'Good', color: 'bg-blue-500' }
    return { level: 4, label: 'Strong', color: 'bg-green-500' }
  }

  const { level, label, color } = calculateStrength(password)

  if (level === 0) return null

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground">Password strength:</span>
        <span className={`text-xs font-semibold ${color.replace('bg-', 'text-')}`}>
          {label}
        </span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i <= level ? color : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
