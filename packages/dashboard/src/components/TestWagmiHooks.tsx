"use client"
import { useBlock, useBlockTransactionCount, useGasPrice } from "wagmi";

const TestWagmiHooks: React.FC = () => {
    const { data: block } = useBlock();
    const { data: transactionCount } = useBlockTransactionCount();
    const { data: gasPrice } = useGasPrice();

    const blockHeight = Number(block?.number);
    const timestamp = Number(block?.timestamp);
    const gasUsed = Number(block?.gasUsed);
    const miner = block?.miner;
    return (
        <section className="flex flex-col mt-12">
            <h2>Block Information</h2>
            <p>Block Height: {blockHeight}</p>
            <p>Timestamp: {timestamp}</p>
            <p>Number of Transactions: {transactionCount}</p>
            <p>Gas Used: {gasUsed}</p>
            <p>Gas Price: {Number(gasPrice)}</p>
            <p>Miner: {miner}</p>
        </section>
    )
}

export default TestWagmiHooks;
