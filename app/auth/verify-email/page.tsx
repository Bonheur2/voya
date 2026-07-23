'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AuthLayout } from '@/components/auth/auth-layout'
import { AuthHeader } from '@/components/auth/auth-header'
import { FormError } from '@/components/auth/form-error'
import { OTPInput } from '@/components/auth/otp-input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [resendCount, setResendCount] = useState(0)
  const [resendTimer, setResendTimer] = useState(0)
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [resendTimer])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (otp.length !== 6) {
      setError('Please enter all 6 digits')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsVerified(true)
    }, 1000)
  }

  const handleResendOTP = async () => {
    setError('')
    setResendCount(resendCount + 1)
    setResendTimer(60)
    // Simulate resend — replace with real API call
  }

  if (isVerified) {
    return (
    <AuthLayout imageSrc="/auth-hero-verify.png">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Email verified!</h2>
            <p className="text-muted-foreground">
              Your email has been successfully verified. You can now access your account.
            </p>
          </div>

          <Button size="lg" className="w-full h-10" onClick={() => router.push('/dashboard')}>
            Go to dashboard
          </Button>
        </div>
      </AuthLayout>
    )
  }

  return (
      <AuthLayout imageSrc="/auth-hero-verify.png">
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthHeader
          title="Verify your email"
          subtitle="Enter the 6-digit code we sent to your email address"
        />

        <FormError message={error} />

        <div className="space-y-4">
          <OTPInput value={otp} onChange={setOtp} length={6} />
          <p className="text-center text-xs text-muted-foreground">
            Digits will be entered automatically
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-10"
          disabled={isLoading || otp.length !== 6}
        >
          {isLoading ? 'Verifying...' : 'Verify code'}
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Didn&apos;t receive the code?
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleResendOTP}
            disabled={resendTimer > 0}
            className="text-primary hover:text-primary/80"
          >
            {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend code'}
          </Button>
        </div>

        <div className="text-center">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Back to sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
