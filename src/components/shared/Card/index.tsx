'use client'

import React, { useCallback, useRef, useState } from 'react'

import styles from './styles.module.css'
import LineChart from '../LineChart'
import { Collapse, Expand } from '@/lib/assets/icons'
import { CardProps } from '@/lib/types/assets.types'
import UseOnClickOutside from '@/lib/hooks/useClickOutside'

const Card: React.FC<CardProps> = ({ title, value, data }) => {
  const [expand, setExpand] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const closeCard = useCallback(() => {
    setExpand(false)
  }, [])
  console.log(cardRef)
  const position = { left: cardRef?.current?.offsetLeft, top: cardRef?.current?.offsetTop }
  UseOnClickOutside(cardRef, closeCard)

  return (
    <div className='w-full lg:h-[256px]' ref={cardRef}>
      <div
        style={{
          left: position.left,
          top: position.top,
        }}
        className={[styles.card, expand ? styles.cardExpand : '', 'dark:bg-cinder'].join(' ')}
      >
        <div className={styles.cardHeader}>
          <div className={styles.cardDetail}>
            <h5 className='dark:text-white'>{title}</h5>
            <p className='dark:text-white'>{value}</p>
          </div>
          <button
            onClick={() => setExpand(!expand)}
            className={styles.cardSwitch}
            aria-label='expand_card'
          >
            {expand ? (
              <Collapse className={[styles.swithIcon, 'dark:fill-white'].join(' ')} />
            ) : (
              <Expand className={[styles.swithIcon, 'dark:fill-white'].join(' ')} />
            )}
          </button>
        </div>
        <div className={styles.cardChart}>
          <LineChart data={data} />
        </div>
      </div>
    </div>
  )
}

export default Card
