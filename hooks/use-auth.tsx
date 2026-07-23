'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { UserProfile } from '@/lib/types'
import { currentUser } from '@/lib/profiles-data'

type AuthState = {
  user: UserProfile | null
  isAuthenticated: boolean
  isLoading: boolean
}

type AuthContextValue = AuthState & {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (data: Partial<UserProfile>) => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: currentUser, // mock: pre-authenticated
    isAuthenticated: true,
    isLoading: false,
  })

  const login = useCallback(async (_email: string, _password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }))
    await new Promise((r) => setTimeout(r, 1000))
    setState({ user: currentUser, isAuthenticated: true, isLoading: false })
  }, [])

  const logout = useCallback(() => {
    setState({ user: null, isAuthenticated: false, isLoading: false })
  }, [])

  const updateProfile = useCallback((data: Partial<UserProfile>) => {
    setState((prev) => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...data } : null,
    }))
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
