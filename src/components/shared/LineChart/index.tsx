'use client'

import React from 'react'

import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { ChartProps } from '@/lib/types/assets.types'

const LineChart: React.FC<ChartProps> = ({ data }) => {
  const options = {
    plugins: {
        legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        gridLines: {
          display: false,
          color: 'transparent'
        },
      },
      y: {
        grid: {
          display: false,
        },
        position: 'right',
        gridLines: {
          display: false,
          color: 'transparent'
        },
      },
    },
  }

  return <Line data={data} options={options} />
}

export default LineChart
