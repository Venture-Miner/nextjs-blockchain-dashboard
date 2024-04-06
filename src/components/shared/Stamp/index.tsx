import React from 'react'

import styles from './styles.module.css'
import { StampProps } from '@/lib/types/components.types'

const Stamp: React.FC<{stamp: StampProps}> = ({stamp}) => {
  return (
    <div className={styles.stamp}>
      <div className={[styles.stampIconContainer, 'dark:bg-white/10'].join(' ')}>
        {stamp.icon}
      </div>
      <div className={styles.stampDetails}>
        <h6 className='dark:text-white'>{stamp.title}</h6>
        <p className='dark:text-white'>{stamp.value}</p>
      </div>
    </div>
  )
}

export default Stamp
