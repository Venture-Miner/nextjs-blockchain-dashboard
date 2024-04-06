import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Expand: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M21.6008 11.4L13.8383 3.52501C13.5008 3.18751 12.9758 3.18751 12.6383 3.52501C12.3008 3.86251 12.3008 4.38751 12.6383 4.72501L18.9383 11.1375H3.00078C2.55078 11.1375 2.17578 11.5125 2.17578 11.9625C2.17578 12.4125 2.55078 12.825 3.00078 12.825H19.0133L12.6383 19.3125C12.3008 19.65 12.3008 20.175 12.6383 20.5125C12.7883 20.6625 13.0133 20.7375 13.2383 20.7375C13.4633 20.7375 13.6883 20.6625 13.8383 20.475L21.6008 12.6C21.9383 12.2625 21.9383 11.7375 21.6008 11.4Z'
        // fill='#07074E'
      />
    </svg>
  )
}

export default Expand
