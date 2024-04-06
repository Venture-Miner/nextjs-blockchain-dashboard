import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Chevron: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' />
    </svg>
  )
}

export default Chevron
