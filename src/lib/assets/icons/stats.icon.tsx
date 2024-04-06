import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Stats: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M140-140v-51.539l40-40V-140h-40Zm160 0v-211.539l40-40V-140h-40Zm160 0v-251.539l40 41V-140h-40Zm160 0v-210.539l40-40V-140h-40Zm160 0v-371.539l40-40V-140h-40ZM140-375.461v-56.078l260-260 160 160 260-260v56.078l-260 260-160-160-260 260Z' />
    </svg>
  )
}

export default Stats
