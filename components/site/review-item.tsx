import { Avatar } from '@/components/ui/avatar'
import { RatingStars } from '@/components/site/bits'

export interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  text: string
}

export function ReviewItem({ review }: { review: Review }) {
  return (
    <div className="border-b border-border pb-5 last:border-b-0">
      <div className="flex items-start gap-4">
        <Avatar src={review.avatar} alt={review.author} size={40} />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="font-semibold text-foreground">{review.author}</p>
            <span className="text-xs text-muted-foreground">{review.date}</span>
          </div>
          <RatingStars rating={review.rating} showValue={false} className="mb-2" />
          <p className="text-sm text-foreground leading-relaxed">{review.text}</p>
        </div>
      </div>
    </div>
  )
}
