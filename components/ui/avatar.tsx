import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function Avatar({
  src,
  alt,
  size = 44,
  className,
  ring,
}: {
  src: string
  alt: string
  size?: number
  className?: string
  ring?: boolean
}) {
  return (
    <span
      className={cn(
        'relative inline-block shrink-0 overflow-hidden bg-muted',
        ring && 'ring-2 ring-card ring-offset-0',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image src={src || '/placeholder.svg'} alt={alt} fill sizes={`${size}px`} className="object-cover" />
    </span>
  )
}

export { Avatar }
