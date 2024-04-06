import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Expand: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M160-160v-280h40v212.461L732.461-760H520v-40h280v280h-40v-212.461L227.539-200H440v40H160Z' />
    </svg>
  )
}

export default Expand
