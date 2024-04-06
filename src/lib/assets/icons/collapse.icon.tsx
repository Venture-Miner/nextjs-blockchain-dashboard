import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Collapse: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M147.538-120 120-147.538 412.461-440H200v-40h280v280h-40v-212.461L147.538-120ZM480-480v-280h40v212.461L812.462-840 840-812.462 547.539-520H760v40H480Z' />
    </svg>
  )
}

export default Collapse
