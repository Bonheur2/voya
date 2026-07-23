'use client'

import { useState, useCallback } from 'react'

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K], formData: T) => string | undefined
}

type ValidationErrors<T> = Partial<Record<keyof T, string>>

export function useFormValidation<T extends Record<string, unknown>>(
  initialValues: T,
  rules: ValidationRules<T>
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<ValidationErrors<T>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})

  const setValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (touched[field] && rules[field]) {
      const error = rules[field]!(value, { ...values, [field]: value })
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }, [touched, rules, values])

  const handleBlur = useCallback((field: keyof T) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    if (rules[field]) {
      const error = rules[field]!(values[field], values)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }, [rules, values])

  const validate = useCallback((): boolean => {
    const newErrors: ValidationErrors<T> = {}
    let isValid = true
    for (const field in rules) {
      const error = rules[field]!(values[field], values)
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    }
    setErrors(newErrors)
    setTouched(Object.keys(rules).reduce((acc, k) => ({ ...acc, [k]: true }), {}))
    return isValid
  }, [rules, values])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  return { values, errors, touched, setValue, handleBlur, validate, reset }
}

// Common validators
export const validators = {
  required: (label: string) => (value: unknown) =>
    !value || (typeof value === 'string' && !value.trim()) ? `${label} is required` : undefined,

  email: () => (value: string) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email address' : undefined,

  minLength: (min: number) => (value: string) =>
    value.length < min ? `Must be at least ${min} characters` : undefined,

  match: (other: string, label: string) => (value: string, form: Record<string, unknown>) =>
    value !== form[other] ? `${label} does not match` : undefined,
}
