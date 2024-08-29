import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWalletContext } from '../context/WalletContext';
import { useState ,useEffect } from 'react';

export default function WalletConnect() {
  const { pkey } = useWalletContext();

  return (
    <div>
      <ClientOnly>
        <WalletMultiButton />
      </ClientOnly>
    </div>
  );
}

// ClientOnly Component
function ClientOnly({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : null;
}
