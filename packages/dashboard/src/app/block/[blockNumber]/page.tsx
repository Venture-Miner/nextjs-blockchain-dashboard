"use client"
import { useBlock } from 'wagmi';
import { useParams } from 'next/navigation';
import { formatTimestamp } from '@/lib/utils';


const BlockPage = () => {
    const { blockNumber } = useParams<{ blockNumber: string }>(); 
    const searchNumber = blockNumber ? BigInt(blockNumber) : undefined;

    const { data: block, isLoading, isError } = useBlock({
        blockNumber: searchNumber,
        includeTransactions: true
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{isError}</div>;
    return (
        <div className="bg-gray-200  my-4 p-4 rounded-lg shadow-lg w-full">
            <h1 className="text-2xl font-bold mb-4">Block #{Number(block?.number)}</h1>

            <div className="my-4">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p>
                    <strong>Block Height:</strong> {Number(block?.number)}
                </p>
                <p>
                    <strong>Timestamp:</strong> {formatTimestamp(Number(block?.timestamp))}
                </p>
            </div>

            <div className="my-4">
                <p>
                    <strong>Transactions:</strong> {(block?.transactions)?.length}
                </p>

            </div>

            <div className="my-4">
                <h2 className="text-xl font-semibold mb-2">Gas Details</h2>
                <p>
                    <strong>Gas Used:</strong> {Number(block?.gasUsed)}
                </p>
                <p>
                    <strong>Gas Limit:</strong> {Number(block?.gasLimit)}
                </p>
                <p>
                    <strong>Base Fee Per Gas:</strong> {Number(block?.baseFeePerGas)}
                </p>
                <p>
                    <strong>Burnt Fees:</strong> {Number(block?.blobGasUsed)}
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Extra Data</h2>
                <p>{block?.extraData}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                <p>
                    <strong>Hash:</strong> {block?.hash}
                </p>
                <p>
                    <strong>Parent Hash:</strong> {block?.parentHash}
                </p>
                <p>
                    <strong>StateRoot:</strong> {block?.stateRoot}
                </p>
                <p>
                    <strong>WithdrawalsRoot:</strong> {block?.withdrawalsRoot}
                </p>
                <p>
                    <strong>Nonce:</strong> {block?.nonce}
                </p>
            </div>
        </div>

    );
};

export default BlockPage;
