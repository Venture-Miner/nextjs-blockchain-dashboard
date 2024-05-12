import { Card } from './ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { TransactionTypes } from '@/lib/types'

export function TransactionCard({ transaction }: { transaction: TransactionTypes }) {
  const trxType = transaction?.tx_types[0]
  const transactionType =
    trxType === 'contract_call'
      ? 'Contract call'
      : trxType === 'coin_transfer'
        ? 'Coin transfer'
        : ''
  return (
    <Card className="mt-4 flex w-full items-center justify-start px-4 py-6" key={transaction?.hash}>
      <div className="flex flex-1 flex-col">
        <p>
          <span className="text-normal text-slate-700">{transactionType}</span>
          <span
            className={`ml-2 inline-block ${transaction?.result === 'success' && 'text-green-500'}`}
          >
            {transaction?.result}
          </span>
        </p>
        <Tooltip>
          <TooltipTrigger className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap text-slate-400">
            {transaction?.hash}
          </TooltipTrigger>
          <TooltipContent>
            <span className="text-slate-400">{transaction?.hash}</span>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex flex-1 flex-col">
        <p>
          <span className="text-normal text-slate-700">From </span>
          <Tooltip>
            <TooltipTrigger className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap text-slate-400">
              {transaction?.from?.hash}
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-slate-400">{transaction?.from?.hash}</span>
            </TooltipContent>
          </Tooltip>
        </p>
        <p>
          <span className="text-normal text-slate-700">To </span>
          <Tooltip>
            <TooltipTrigger className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap text-slate-400">
              {transaction?.to?.hash}
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-slate-400">{transaction?.to?.hash}</span>
            </TooltipContent>
          </Tooltip>
        </p>
      </div>
      <div className="flex flex-1 flex-col">
        <p>
          <span className="text-normal text-slate-700">Value</span>
          <span className={`ml-2 inline-block text-slate-400`}>
            {transaction?.value.toLocaleString()}
          </span>
        </p>
        <p>
          <span className="text-normal text-slate-700">Fee</span>
          <span className={`ml-2 inline-block text-slate-400`}>
            {transaction?.fee.value.toLocaleString()}
          </span>
        </p>
      </div>
    </Card>
  )
}
