import { Block, Transaction } from 'viem'

export type BlockTypes = Block & {
  height: number
  timestamp: Date
  tx_count: number
  gas_used_percentage: number
  miner: { hash: string }
}

export type TransactionTypes = Transaction & {
  tx_types: string[]
  result: string
  from: { hash: string }
  to: { hash: string }
  fee: { value: bigint }
}
