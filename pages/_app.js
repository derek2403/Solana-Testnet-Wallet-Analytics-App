import React from 'react';
import { WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletProvider } from '../context/WalletContext'; // Import your WalletContext

import '@solana/wallet-adapter-react-ui/styles.css';

const endpoint = clusterApiUrl('devnet');
const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
];

function MyApp({ Component, pageProps }) {
  return (
    <SolanaWalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <WalletProvider> {/* Wrap your app with the custom WalletProvider */}
          <Component {...pageProps} />
        </WalletProvider>
      </WalletModalProvider>
    </SolanaWalletProvider>
  );
}

export default MyApp;
