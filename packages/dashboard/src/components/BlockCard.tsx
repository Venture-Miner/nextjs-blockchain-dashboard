import { CubeIcon } from './icons'
import { Card, CardContent, CardHeader } from './ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { BlockTypes } from '@/lib/types'

export function BlockCard({ block }: { block: BlockTypes }) {
  const timestamp = new Date(block?.timestamp)
  const seconds = timestamp.getSeconds()
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds // Ensure two-digit format
  return (
    <Card className="mt-2 min-w-40" key={block.hash}>
      <CardHeader style={{ padding: 14 }} className="flex flex-row items-center justify-between">
        <div className="flex items-center font-semibold text-slate-700">
          <CubeIcon height={20} width={20} />
          <span className="ml-2">{block?.height?.toString()}</span>
        </div>
        <span className="text-slate-400">{formattedSeconds}s ago</span>
      </CardHeader>
      <CardContent style={{ padding: 14, margin: 0 }}>
        <div className="flex justify-start">
          <span className="w-20 font-normal text-slate-700">Txn</span>
          <span className="text-slate-400">{block.tx_count}</span>
        </div>
        <div className="flex justify-start">
          <span className="w-20 font-normal text-slate-700">Gas Used</span>
          <span className="text-slate-400">{block?.gas_used_percentage.toLocaleString()}%</span>
        </div>
        <div className="flex justify-start">
          <span className="w-20 font-normal text-slate-700">Validator</span>
          <Tooltip>
            <TooltipTrigger className="w-20 overflow-hidden overflow-ellipsis whitespace-nowrap text-slate-400">
              {block?.miner.hash}
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-slate-400">{block?.miner.hash}</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  )
}
