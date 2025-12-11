import { type LucideProps, Star } from 'lucide-react'

export const EmptyStar = ({ ...props }: LucideProps) => {
  return <Star {...props} className='empty-star' />
}
