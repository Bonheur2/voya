'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // ignore write errors
    }
  }, [key, storedValue])

  const setValue = (value: T | ((prev: T) => T)) => {
    setStoredValue((prev) => (typeof value === 'function' ? (value as (p: T) => T)(prev) : value))
  }

  const removeValue = () => {
    setStoredValue(initialValue)
    if (typeof window !== 'undefined') window.localStorage.removeItem(key)
  }

  return [storedValue, setValue, removeValue] as const
}
