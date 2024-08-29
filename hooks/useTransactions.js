import { useState, useEffect, useCallback } from 'react';

export const useTransactions = (publicKey) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTransactions = useCallback(async () => {
    if (publicKey) {
      setLoading(true);
      try {
        const response = await fetch('/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ publicKey }),
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
  }, [publicKey]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const refreshTransactions = () => {
    fetchTransactions();
  };

  return { transactions, loading, error, refreshTransactions };
};