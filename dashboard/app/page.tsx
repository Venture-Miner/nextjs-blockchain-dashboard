'use client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { config } from '../config/wagmi';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          Hello World{' '}
        </main>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
