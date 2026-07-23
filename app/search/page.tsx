import { Suspense } from 'react'
import { SearchPageClient } from './search-page-client'

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SearchPageClient />
    </Suspense>
  )
}
