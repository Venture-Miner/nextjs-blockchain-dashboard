"use client"
import { useBlock } from 'wagmi';
import { useParams, useRouter } from 'next/navigation';
import { formatTimestamp } from '@/lib/utils';

const BlockPage = () => {
    const { blockNumber } = useParams<{ blockNumber: string }>();
    const router = useRouter();
    const searchNumber = blockNumber ? BigInt(blockNumber) : undefined;

    const { data: block, isLoading, isError } = useBlock({
        blockNumber: searchNumber,
        includeTransactions: true
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{isError}</div>;

    return (
        <div className='w-full'>
            <div className="flex items-center mt-8 my-4">
                <button
                    onClick={() => router.push('/')}
                    className="bg-gray-400 hover:bg-gray-600 text-gray-800 font-bold py-1 px-2 rounded-l text-xs"
                >
                    &lt; Back
                </button>
                <h2 className="text-lg font-semibold text-gray-600 ml-2">Block {Number(block?.number)}</h2>
            </div>


            
            <h3 className="text-sm font-semibold mt-4 text-gray-600 bg-gray-300 rounded-full px-2 py-1 inline-block">
                Overview
            </h3>

            <div className="bg-gray-200 my-4 p-4 rounded-lg shadow-lg w-full">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Block Height:</strong>
                            </p>
                            <p>{Number(block?.number)}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Timestamp:</strong>
                            </p>
                            <p>{formatTimestamp(Number(block?.timestamp))}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Transactions:</strong>
                            </p>
                            <p>{(block?.transactions)?.length}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-gray-600">Gas Details</h2>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Gas Used:</strong>
                            </p>
                            <p>{Number(block?.gasUsed)}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Gas Limit:</strong>
                            </p>
                            <p>{Number(block?.gasLimit)}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Base Fee Per Gas:</strong>
                            </p>
                            <p>{Number(block?.baseFeePerGas)}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Burnt Fees:</strong>
                            </p>
                            <p>{Number(block?.blobGasUsed)}</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-gray-600">Additional Information</h2>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Parent Hash:</strong>
                            </p>
                            <p>{block?.parentHash}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>StateRoot:</strong>
                            </p>
                            <p>{block?.stateRoot}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>WithdrawalsRoot:</strong>
                            </p>
                            <p>{block?.withdrawalsRoot}</p>
                        </div>
                        <div className="flex">
                            <p className="w-60 text-gray-700">
                                <strong>Nonce:</strong>
                            </p>
                            <p>{block?.nonce}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockPage;