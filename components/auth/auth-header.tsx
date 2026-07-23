'use client'

import React from 'react'

interface AuthHeaderProps {
  title: string
  subtitle?: string
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
        {title}
      </h1>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
