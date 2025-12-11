export const getStarType = (
  rating: number,
  index: number,
): 'full' | 'half' | 'empty' => {
  const roundedRating = Math.round(rating * 2) / 2
  const half = 0.5

  if (roundedRating >= index + 1) return 'full'

  if (roundedRating >= index + half) return 'half'

  return 'empty'
}