import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Transaction: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M292.308-200.769 120-373.077l172.308-172.308 28.307 28.539-123.769 123.769h295.462v40H196.846l123.769 123.769-28.307 28.539Zm375.384-214.616-28.307-28.538 123.769-123.769H467.692v-40.001h295.462L639.385-731.462 667.692-760 840-587.692 667.692-415.385Z' />
    </svg>
  )
}

export default Transaction
