import React from 'react'

import styles from './styles.module.css'
import Stamp from '@/components/shared/Stamp'
import { StampProps } from '@/lib/types/components.types'
import { Block, Heirachy, Nodes, Time, Transaction, Wallet } from '@/lib/assets/icons'
import ThemeSwitch from '@/components/shared/Theme/theme.component'
import ThemeProvide from '@/components/shared/Theme/ThemeProvider.component'
import Card from '@/components/shared/Card'

const Test: React.FC = () => {
  const stamps: StampProps[] = [
    { icon: <Wallet className='dark:fill-white' />, title: 'Addresses', value: '2 345 456' },
    { icon: <Block className='dark:fill-white' />, title: 'Block height', value: '2 345 456' },
    {
      icon: <Transaction className='dark:fill-white' />,
      title: 'Transactions',
      value: '2 345 456',
    },
    { icon: <Time className='dark:fill-white' />, title: 'TPS', value: '0.79' },
    { icon: <Nodes className='dark:fill-white' />, title: 'Nodes', value: '2 794' },
    { icon: <Heirachy className='dark:fill-white' />, title: 'DS Height', value: '15 794' },
  ]

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#077a8f',
        tension: 0.4,
      },
    ],
  }
  return (
    <ThemeProvide>
      <div className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
        <section id='overview' className={styles.sectionContainer}>
          <h1>Stamps</h1>
          <div className={[styles.stampContainer, 'dark:divide-gray-600'].join(' ')}>
            {stamps.map((stamp, index: number) => (
              <Stamp key={index} stamp={stamp} />
            ))}
          </div>
        </section>
        <section id='theme' className={styles.sectionContainer}>
          <h1>Theme Switcher</h1>
          <div className={styles.stampContainer}>
            <ThemeSwitch />
          </div>
        </section>
        <section id='Cards' className={styles.sectionContainer}>
          <h1>Cards</h1>
          <div className={styles.cardContainer}>
            <Card title='Transactions' value='46 323' data={data} />
            <Card title='Address Growth' value='4 234' data={data} />
            <Card title='Blocks' value='5 234' data={data} />
          </div>
        </section>
      </div>
    </ThemeProvide>
  )
}

export default Test
