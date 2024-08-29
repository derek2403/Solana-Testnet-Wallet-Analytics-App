import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import fs from 'fs/promises';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), 'data', 'transactions_cache.json');
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

async function readCache() {
  try {
    const data = await fs.readFile(CACHE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

async function writeCache(data) {
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(data));
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { publicKey } = req.body;

    if (!publicKey) {
      return res.status(400).json({ error: 'Public key is required' });
    }

    try {
      // Check cache first
      const cache = await readCache();
      if (cache && cache.publicKey === publicKey && Date.now() - cache.timestamp < CACHE_EXPIRY) {
        return res.status(200).json(cache.transactions);
      }

      // If cache miss or expired, fetch from Solana
      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
      const parsedPublicKey = new PublicKey(publicKey);
      const signatures = await connection.getSignaturesForAddress(parsedPublicKey);
      const transactions = await Promise.all(
        signatures.map(sig => connection.getTransaction(sig.signature))
      );

      const filteredTransactions = transactions.filter(tx => tx !== null);

      // Update cache
      await writeCache({
        publicKey,
        transactions: filteredTransactions,
        timestamp: Date.now()
      });

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