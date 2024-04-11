'use client'
import { useBlock } from 'wagmi'
import { useParams, useRouter } from 'next/navigation'
import { formatTimestamp } from '@/lib/utils'

const BlockPage = () => {
  const { blockNumber } = useParams<{ blockNumber: string }>()
  const router = useRouter()
  const searchNumber = blockNumber ? BigInt(blockNumber) : undefined

  const {
    data: block,
    isLoading,
    isError,
  } = useBlock({
    blockNumber: searchNumber,
    includeTransactions: true,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error while fetching data</div>

  return (
    <div className="w-full">
      <div className="my-4 mt-8 flex items-center">
        <button
          onClick={() => router.push('/')}
          className="rounded-l bg-gray-400 px-2 py-1 text-xs font-bold text-gray-800 hover:bg-gray-600"
        >
          &lt; Back
        </button>
        <h2 className="ml-2 text-lg font-semibold text-gray-600">Block {Number(block?.number)}</h2>
      </div>

      <h3 className="mt-4 inline-block rounded-full bg-gray-300 px-2 py-1 text-sm font-semibold text-gray-600">
        Overview
      </h3>

      <div className="my-4 w-full overflow-auto rounded-lg bg-gray-200 p-4 shadow-lg">
        <div className="flex flex-col">
          <div className="mb-4">
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Block Height:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{Number(block?.number)}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Timestamp:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">
                {formatTimestamp(Number(block?.timestamp))}
              </p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Transactions:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{block?.transactions?.length}</p>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="mb-2 text-lg font-semibold text-gray-600">Gas Details</h2>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Gas Used:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{Number(block?.gasUsed)}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Gas Limit:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{Number(block?.gasLimit)}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Base Fee Per Gas:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{Number(block?.baseFeePerGas)}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Burnt Fees:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{Number(block?.blobGasUsed)}</p>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="mb-2 text-lg font-semibold text-gray-600">Additional Information</h2>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Parent Hash:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{block?.parentHash}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>StateRoot:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{block?.stateRoot}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>WithdrawalsRoot:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{block?.withdrawalsRoot}</p>
            </div>
            <div className="flex flex-wrap">
              <p className="w-full text-gray-700 md:w-48 lg:w-60">
                <strong>Nonce:</strong>
              </p>
              <p className="w-full text-gray-700 md:w-auto">{block?.nonce}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPage
