'use client'
import { Card } from './ui/card'
import { LineChart, Line, Tooltip } from 'recharts'

export async function StatsChart({
  data,
  dailyTransaction,
  coinPrice,
  marketCap,
}: {
  data: [{ date: string; tx_account: number }]
  dailyTransaction: string
  coinPrice: string
  marketCap: string
}) {
  return (
    <Card className="mt-4 flex w-full  px-2 py-3">
      <div className="flex flex-col p-2">
        <p className="text-3xl  text-slate-700">Daily Transactions</p>
        <p className="mb-4 text-4xl font-medium text-slate-400">{dailyTransaction}</p>
        <LineChart width={600} height={150} data={data}>
          <Tooltip />
          <Line type="monotone" dataKey="tx_count" stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="flex flex-1 flex-col items-center p-2">
        <Card className=" flex w-3/4 flex-col p-2">
          <p className="text-sm text-slate-400">Daily Transactions</p>
          <p className="text-xl font-medium text-slate-700">{dailyTransaction}</p>
        </Card>
        <Card className=" mt-2 flex w-3/4 flex-col p-2">
          <p className="text-sm text-slate-400">Price</p>
          <p className="text-xl font-medium text-slate-700">${coinPrice}</p>
        </Card>
        <Card className=" mt-2 flex w-3/4 flex-col p-2">
          <p className="text-sm text-slate-400">Market Cap</p>
          <p className="text-xl font-medium text-slate-700">{marketCap}</p>
        </Card>
      </div>
    </Card>
  )
}
