import Link from 'next/link'
import { BlockCard } from './BlockCard'
import { TransactionCard } from './TransactionCard'
import { BlockTypes, TransactionTypes } from '@/lib/types'

const ChainContent = ({
  transactions,
  blocks,
}: {
  transactions: TransactionTypes[]
  blocks: BlockTypes[]
}) => {
  return (
    <section className="flex w-full flex-col justify-between overflow-hidden md:flex-row">
      <div className="mt-4 w-1/4">
        <p className="font-semibold text-slate-600">Latest Blocks</p>
        {blocks.map((block) => (
          <BlockCard key={block?.hash} block={block} />
        ))}
        <Link href="/" className="my-2 block text-center font-medium text-blue-400">
          View all blocks
        </Link>
      </div>
      <div className="my-4 ml-6 flex-1">
        <p className="font-semibold text-slate-600">Latest Transactions</p>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction?.hash} transaction={transaction} />
        ))}
        <Link href="/" className="my-2 block text-center font-medium text-blue-400">
          View all transaction
        </Link>
      </div>
    </section>
  )
}

export default ChainContent
