export const useHandleClick = () => {
  const handleClick = (
    ev: React.MouseEvent<HTMLDivElement>,
    index: number,
    isReadonly: boolean = true,
    onChange?: (value: number) => void,
  ) => {
    if (isReadonly || !onChange) return

    const rectangle = ev.currentTarget.getBoundingClientRect()
    const x = ev.clientX - rectangle.left

    const isLeft = x < rectangle.width / 2
    const newValue = index + (isLeft ? 0.5 : 1)

    onChange(newValue)
  }

  return { handleClick }
}
