import { useId } from 'react'

type SpiralMarkProps = {
  size: number
  strokeWidth?: number
  /** Draws the spiral in and pulses the orbit dots (hero only). */
  animated?: boolean
  /** Flat gold stroke instead of the gold gradient. */
  solid?: boolean
  className?: string
}

const SPIRAL_PATH =
  'M0,-40 A40,40 0 0,1 40,0 A30,30 0 0,1 10,26 A20,20 0 0,1 -10,5 A12,12 0 0,1 3,-7 A7,7 0 0,1 10,0'

/** The Thelxis spiral logo mark. */
export function SpiralMark({
  size,
  strokeWidth = 2.5,
  animated = false,
  solid = false,
  className,
}: SpiralMarkProps) {
  const gradientId = useId()
  const dotClass = animated ? 'orbit-dot' : undefined

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-55 -55 110 110"
      aria-hidden="true"
    >
      {!solid && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9E7B2F" />
            <stop offset="50%" stopColor="#E8D48B" />
            <stop offset="100%" stopColor="#C9A44E" />
          </linearGradient>
        </defs>
      )}
      <path
        className={animated ? 'spiral-anim' : undefined}
        d={SPIRAL_PATH}
        fill="none"
        stroke={solid ? '#C9A44E' : `url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle className={dotClass} cx="0" cy="-42" r="4" fill="#E8D48B" />
      <circle className={dotClass} cx="42" cy="0" r="3.5" fill="#C9A44E" />
      <circle className={dotClass} cx="10" cy="28" r="3" fill="#9E7B2F" />
      <circle cx="6" cy="-2" r="3.5" fill="#E8D48B" />
    </svg>
  )
}
