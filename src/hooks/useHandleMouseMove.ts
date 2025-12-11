import { useState } from 'react'

export const useHandleMouseMove = () => {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const handleMouseMove = (
    ev: React.MouseEvent<HTMLDivElement>,
    index: number,
    isReadonly: boolean = true,
  ) => {
    if (isReadonly) return

    const rectangle = ev.currentTarget.getBoundingClientRect()
    const x = ev.clientX - rectangle.left

    const isLeft = x < rectangle.width / 2
    const newValue = index + (isLeft ? 0.5 : 1)

    setHoverValue(newValue)
  }

  const handleMouseLeave = (isReadonly: boolean = true) => {
    if (isReadonly) return
    setHoverValue(null)
  }

  return {
    hoverValue,
    handleMouseMove,
    handleMouseLeave,
  }
}
