'use client'
import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export async function fetchData<T>(input: number | string, dataType: 'block' | 'transaction'): Promise<T> {
    let response;
    if (dataType === 'block' && typeof input === 'number') {
        response = await alchemy.core.getBlock(input);
    } else if (dataType === 'transaction' && typeof input === 'string') {
        response = await alchemy.core.getTransaction(input);
    }
    if (!response) {
        throw new Error(`HTTP error! No response for ${dataType} at block ${input}`);
    }
    return response as T;
  }


 export async function fetchLastNData<T>(latestBlockNumber: number, n: number, dataType: 'block' | 'transaction'): Promise<T[] | undefined> {
    if (latestBlockNumber) {
        const blockNumbers = Array.from({ length: n }, (_, index) => latestBlockNumber - index);
        try {
            const dataPromises = blockNumbers.map(blockNumber => fetchData<T>(blockNumber, dataType));
            const data = await Promise.all(dataPromises);
            return data;
        } catch (error) {
            return [];
        }
    }
    return undefined;
}
