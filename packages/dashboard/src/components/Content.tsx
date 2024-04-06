import React from 'react';

// Mock components for placeholder content
const MockBlockData: React.FC = () => (
    <div className="flex-1 mr-4 bg-gray-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Block Data</h2>
        <p>Block Number: 12345</p>
        <p>Timestamp: {new Date().toLocaleString()}</p>
        <p>Miner: 0xABC123</p>
    </div>
);

const MockTransactions: React.FC = () => (
    <div className="flex-1 bg-gray-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Transactions</h2>
        <ul>
            <li>Transaction 1</li>
            <li>Transaction 2</li>
            <li>Transaction 3</li>
        </ul>
    </div>
);

const Content: React.FC = () => {
    return (
        <section className="flex flex-1 justify-between w-full">
            <MockBlockData />
            <MockTransactions />
        </section>
    );
};

export default Content;
