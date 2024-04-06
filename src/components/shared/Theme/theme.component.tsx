'use client'

import React, { memo, useMemo, useState } from 'react'

import styles from './styles.module.css'
import { useTheme } from 'next-themes'
import { Dark, Light } from '@/lib/assets/icons'

const ThemeSwitch: React.FC = () => {
  const [light, setLight] = useState(true)
  const { theme, setTheme } = useTheme()
  const Switch = () => {
    if (light) {
      setLight(false)
      setTheme('dark')
    }
    if (!light) {
      setLight(true)
      setTheme('light')
    }
  }
  useMemo(() => {
    if (theme === 'dark') {
      setLight(false)
      setTheme('dark')
    }
    if (theme === 'light') {
      setLight(true)
      setTheme('light')
    }
  }, [theme])
  return (
    <div className={`${styles.switchContainer} dark:bg-cinder-light`} onClick={Switch}>
      <Light className={`${styles.themeIcon} dark:fill-white left-1`} />
      <div
        className={`${styles.switchButton} ${
          light ? styles.switchLight : styles.switchDark
        } dark:!bg-cinder-dark`}
      />
      <Dark className={`${styles.themeIcon} dark:fill-white right-1`} />
    </div>
  )
}

export default memo(ThemeSwitch)
