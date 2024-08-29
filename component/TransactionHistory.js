import React from 'react';

const TransactionHistory = ({ transactions, loading, error, refreshTransactions, onViewAll }) => {
  const formatAge = (timestamp) => {
    const now = new Date();
    const txDate = new Date(timestamp * 1000);
    const diffTime = Math.abs(now - txDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? 'Today' : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <button onClick={refreshTransactions} style={{ padding: '5px 10px', backgroundColor: '#3498db', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>
          Refresh
        </button>
      </div>
      {loading && <p>Loading transactions...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2c2c3d' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Transaction Signature</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Block</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Age</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #2c2c3d' }}>
                <td style={{ padding: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{tx.transaction.signatures[0]}</td>
                <td style={{ padding: '8px' }}>{tx.slot}</td>
                <td style={{ padding: '8px' }}>{formatAge(tx.blockTime)}</td>
                <td style={{ padding: '8px' }}><span style={{ backgroundColor: '#28a745', color: 'white', padding: '2px 6px', borderRadius: '10px', fontSize: '0.8em' }}>Success</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button 
        onClick={onViewAll} 
        style={{ marginTop: 'auto', padding: '8px 16px', backgroundColor: 'transparent', border: 'none', color: '#3498db', cursor: 'pointer', alignSelf: 'flex-start' }}
      >
        View all transactions
      </button>
    </div>
  );
};

export default TransactionHistory;