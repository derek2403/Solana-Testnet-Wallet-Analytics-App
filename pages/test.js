import React, { useEffect, useState } from 'react';
import { useWalletContext } from '../context/WalletContext';

const TransactionFetcher = () => {
  const { pkey } = useWalletContext();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (pkey) {
        setLoading(true);
        try {
          const response = await fetch('/api/transactions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicKey: pkey }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setTransactions(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTransactions();
  }, [pkey]);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error: {error}</p>;

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

export default TransactionFetcher;