/** biome-ignore-all lint/a11y/noStaticElementInteractions: <a> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <b> */
import { useRef } from 'react'
import { useHandleClick } from '../hooks/useHandleClick'
import { useHandleMouseMove } from '../hooks/useHandleMouseMove'
import { getStarType } from '../utils/getStarType'
import { EmptyStar } from './EmptyStar'
import { FullStar } from './FullStar'
import { HalfFullStar } from './HalfFullStar'

type RatingProps = {
  starAmount?: number
  defaultValue?: number
  isReadonly?: boolean
  onChange?: (value: number) => void
}

export const Rating = ({
  starAmount = 5,
  defaultValue = 0,
  isReadonly = true,
  onChange,
}: RatingProps) => {
  const { handleClick } = useHandleClick()
  const { handleMouseMove, handleMouseLeave } = useHandleMouseMove()

  const stars = Array.from({ length: Math.round(starAmount) })

  const keysRef = useRef<string[]>(
    Array.from({ length: Math.round(starAmount) }, () => crypto.randomUUID()),
  )
  return (
    <div className='rating-container'>
      {stars.map((_, index) => {
        const starType = getStarType(defaultValue, index)

        return (
          <div
            key={keysRef.current[index]}
            style={{ cursor: isReadonly ? 'cursor-default' : 'cursor-pointer' }}
            onClick={(ev) => handleClick(ev, index, isReadonly, onChange)}
            onMouseMove={(ev) => handleMouseMove(ev, index, isReadonly)}
            onMouseLeave={() => handleMouseLeave(isReadonly)}
          >
            {starType === 'full' ? (
              <FullStar />
            ) : starType === 'half' ? (
              <HalfFullStar />
            ) : (
              <EmptyStar />
            )}
          </div>
        )
      })}
    </div>
  )
}
