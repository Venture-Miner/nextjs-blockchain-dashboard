import ChainContent from '@/components/ChainContent'
import { ChainStatsCard } from '@/components/ChainStatsCard'
import {
  CardStackIcon,
  ClockIcon,
  ContainerIcon,
  CubeIcon,
  TransformIcon,
} from '@/components/icons'
import { StatsChart } from '@/components/StatsChart'

async function getStats(chainType: string) {
  const res = await fetch(`https://${chainType}.${process.env.API_URL}/stats`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getChartTransaction(chainType: string) {
  const res = await fetch(`https://${chainType}.${process.env.API_URL}/stats/charts/transactions`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getMainPageTransaction(chainType: string) {
  const res = await fetch(`https://${chainType}.${process.env.API_URL}/main-page/transactions`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getMainPageBlocks(chainType: string) {
  const res = await fetch(`https://${chainType}.${process.env.API_URL}/main-page/blocks`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Chain({ params }: { params: { chainType: string } }) {
  const { chainType } = params
  const data = await getStats(chainType)
  const chartData = await getChartTransaction(chainType)

  const mainPageTransactions = await getMainPageTransaction(chainType)
  const mainPageBlocks = await getMainPageBlocks(chainType)

  let transactionsTodayFormatted
  const transactionsTodayInMillion = parseInt(data.transactions_today) / 1000000
  const transactionsTodayInBillion = parseInt(data.transactions_today) / 1000000000

  if (transactionsTodayInBillion >= 1) {
    transactionsTodayFormatted = `${transactionsTodayInBillion.toFixed(2)}B`
  } else if (transactionsTodayInMillion >= 1) {
    transactionsTodayFormatted = `${transactionsTodayInMillion.toFixed(2)}M`
  } else {
    transactionsTodayFormatted = `${data.transactions_today}`
  }

  let marketCapFormatted
  const marketCapInMillion = parseFloat(data.market_cap) / 1000000
  const marketCapInBillion = parseFloat(data.market_cap) / 1000000000

  if (marketCapInBillion >= 1) {
    marketCapFormatted = `$${marketCapInBillion.toFixed(2)}B`
  } else if (marketCapInMillion >= 1) {
    marketCapFormatted = `$${marketCapInBillion.toFixed(2)}M`
  } else {
    marketCapFormatted = `$${data.market_cap}`
  }

  // Extract relevant data from the API response
  const chainData = [
    {
      id: '1',
      icon: <CubeIcon height={25} width={25} />,
      title: 'Total Blocks',
      value: parseInt(data.total_blocks).toLocaleString(),
    },
    {
      id: '2',
      icon: <ClockIcon height={25} width={25} />,
      title: 'Average Block Time',
      value: `${(parseInt(data.average_block_time) / 1000).toLocaleString()}.0s`,
    },
    {
      id: '3',
      icon: <TransformIcon height={25} width={25} />,
      title: 'Total Transactions',
      value: parseInt(data.total_transactions).toLocaleString(),
    },
    {
      id: '4',
      icon: <CardStackIcon height={25} width={25} />,
      title: 'Wallet Addresses',
      value: parseInt(data.total_addresses).toLocaleString(),
    },
    {
      id: '5',
      icon: <ContainerIcon height={25} width={25} />,
      title: 'Gas Tracker',
      value: data.gas_prices.average,
    },
  ]

  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="flex w-full flex-wrap justify-between">
        {chainData.map((chain) => (
          <ChainStatsCard key={chain.id} title={chain.title} value={chain.value}>
            {chain.icon}
          </ChainStatsCard>
        ))}
      </div>
      <StatsChart
        data={chartData.chart_data}
        dailyTransaction={transactionsTodayFormatted}
        coinPrice={data.coin_price}
        marketCap={marketCapFormatted}
      />
      <ChainContent transactions={mainPageTransactions} blocks={mainPageBlocks} />
    </div>
  )
}
