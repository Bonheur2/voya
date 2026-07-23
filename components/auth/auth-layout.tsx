'use client'

import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
  imageSrc?: string
}

export function AuthLayout({ children, imageSrc }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Form Side */}
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-sm lg:max-w-md">{children}</div>
        </div>

        {/* Image Side - Desktop Only */}
        {imageSrc && (
          <div className="hidden lg:block relative bg-gradient-to-br from-primary/20 to-primary/10 overflow-hidden">
            <img
              src={imageSrc}
              alt="Auth background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        )}
      </div>
    </div>
  )
}
