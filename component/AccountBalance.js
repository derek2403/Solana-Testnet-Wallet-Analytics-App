import React, { useEffect, useState } from 'react';
import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useWalletContext } from '../context/WalletContext';

const AccountBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { pkey } = useWalletContext();

  useEffect(() => {
    const fetchBalance = async () => {
      if (!pkey) {
        setError('No public key found');
        setLoading(false);
        return;
      }

      try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const publicKey = new PublicKey(pkey);
        const balanceLamports = await connection.getBalance(publicKey);
        const balanceSol = balanceLamports / LAMPORTS_PER_SOL;
        setBalance(balanceSol);
      } catch (err) {
        setError('Error fetching balance: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pkey) {
      fetchBalance();
    }
  }, [pkey]);

  if (!pkey) {
    return (
      <>
        <img 
          src="/bankrupt.png" 
          alt="Connect Wallet" 
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'contain'
          }}
        />
        <p style={{ marginTop: '10px', color: '#FFFFFF' }}>
          Please connect your wallet to view account balance
        </p>
      </>
    );
  }
  

  if (loading) {
    return <p>Loading balance...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img height={50} src="https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png" alt="Solana Logo" />
      <h1 style={{ margin: "0", fontWeight: "bolder", fontSize: "2.3rem" }}>SOL: {balance}</h1>
    </div>

  );
};

export default AccountBalance;