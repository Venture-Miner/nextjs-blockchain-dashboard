'use client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { config } from '../config/wagmi';

import Home from '@/pages/Home';

export default function Page() {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <main>
          <Home />
        </main>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
