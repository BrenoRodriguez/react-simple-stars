import { type LucideProps, Star } from 'lucide-react'
import { EmptyStar } from './EmptyStar'

export const HalfFullStar = ({ ...props }: LucideProps) => {
  return (
    <div className='half-star-container'>
      <EmptyStar {...props} />
      <div className='half-filled-star-container'>
        <Star {...props} className='half-filled-star' />
      </div>
    </div>
  )
}
