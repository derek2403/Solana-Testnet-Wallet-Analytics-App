import React, { createContext, useContext, useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

// Create the context
const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const { publicKey } = useWallet();
  const [pkey, setPkey] = useState(null);

  useEffect(() => {
    console.log('useWallet publicKey:', publicKey); // Log the public key from the wallet

    if (publicKey) {
      const publicKeyString = publicKey.toString();
      console.log('Setting pkey:', publicKeyString); // Log the public key being set
      setPkey(publicKeyString);
    } else {
      console.log('No public key found, setting pkey to null');
      setPkey(null);
    }
  }, [publicKey]);

  return (
    <WalletContext.Provider value={{ pkey }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use the WalletContext
export const useWalletContext = () => {
  return useContext(WalletContext);
};
