// pages/api/transactions.js

import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

// Handler function for API requests
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { publicKey } = req.body;

    if (!publicKey) {
      return res.status(400).json({ error: 'Public key is required' });
    }

    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    try {
      const parsedPublicKey = new PublicKey(publicKey);
      const signatures = await connection.getSignaturesForAddress(parsedPublicKey);
      const transactions = await Promise.all(
        signatures.map(sig => connection.getTransaction(sig.signature))
      );

      const filteredTransactions = transactions.filter(tx => tx !== null);

      res.status(200).json(filteredTransactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({ error: 'Error fetching transactions' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
