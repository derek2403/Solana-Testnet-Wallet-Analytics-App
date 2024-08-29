import React, { useMemo, useState, useEffect } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

const TransactionDetailsComponent = () => {
  const { publicKey } = useWallet();
  const [transactions, setTransactions] = useState([]);
  const connection = useMemo(() => new Connection(clusterApiUrl('devnet')), []);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (publicKey) {
        try {
          console.log('Fetching transactions for:', publicKey.toBase58());
          const signatures = await connection.getSignaturesForAddress(publicKey);
          console.log('Signatures:', signatures);
          const txs = await Promise.all(
            signatures.map(sig => connection.getTransaction(sig.signature))
          );
          console.log('Transactions:', txs);
          setTransactions(txs.filter(tx => tx !== null));
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      } else {
        console.log('No public key available');
      }
    };

    fetchTransactions();
  }, [publicKey, connection]);

  return (
    <div>
      <h2>Transaction Details</h2>
      {transactions.length > 0 ? (
        transactions.map((tx, index) => (
          <div key={index}>
            <p><strong>Transaction Signature:</strong> {tx.transaction.signatures[0]}</p>
            <p><strong>Slot:</strong> {tx.slot}</p>
            <p><strong>Fee:</strong> {tx.meta.fee}</p>
            <p><strong>Block Time:</strong> {tx.blockTime ? new Date(tx.blockTime * 1000).toLocaleString() : 'Not available'}</p>
            <pre><strong>Transaction Data:</strong> {JSON.stringify(tx.transaction, null, 2)}</pre>
          </div>
        ))
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionDetailsComponent;
