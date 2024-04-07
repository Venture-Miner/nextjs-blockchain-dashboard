"use client"
import React, { useEffect, useState } from 'react';
import BlockDataTable from './BlockDataTable';
import TransactionsDataTable from './TransactionsDataTable';
import { useBlock } from 'wagmi';
import { Block } from 'viem';
import { fetchLastNData } from '@/services';
import { blockTabCol } from '@/lib/blockTabCol';
import { transactionsTabCol } from '@/lib/transactionsTabCol';


const Content: React.FC = () => {
    const [blockData, setBlockData] = useState<Block[]>([]);
    const { data: block, isLoading, isError } = useBlock({
        includeTransactions: true
    });

    useEffect(() => {
        fetchLastNData(Number(block?.number), 30, 'block')
            .then((blocks) => {
                if (blocks) {
                    const modBlock = blocks as unknown as Block[]
                    setBlockData(modBlock)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [block?.number])


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{isError}</div>;

    return (
        <section className="flex flex-col md:flex-row justify-between w-full overflow-hidden">
            <div className="md:w-1/2 p-4">
                <BlockDataTable columns={blockTabCol} data={blockData} />
            </div>
            <div className="md:w-1/2 p-4">
                <TransactionsDataTable columns={transactionsTabCol} data={block?.transactions || []} />
            </div>
        </section>
    );
};

export default Content;
