import React from 'react';

const TransactionPopup = ({ transactions, onClose }) => {
  const formatAge = (timestamp) => {
    const now = new Date();
    const txDate = new Date(timestamp * 1000);
    const diffTime = Math.abs(now - txDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? 'Today' : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#1E1E2D',
        padding: '20px',
        borderRadius: '8px',
        width: '80%',
        maxHeight: '80%',
        overflowY: 'auto',
        color: 'white'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'white' }}>All Transactions</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2c2c3d' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Transaction Signature</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Block</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Age</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Timestamp</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #2c2c3d' }}>
                <td style={{ padding: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px', color: '#6c7293' }}>{tx.transaction.signatures[0]}</td>
                <td style={{ padding: '8px', color: 'white' }}>{tx.slot}</td>
                <td style={{ padding: '8px', color: 'white' }}>{formatAge(tx.blockTime)}</td>
                <td style={{ padding: '8px', color: 'white' }}>{new Date(tx.blockTime * 1000).toLocaleString()}</td>
                <td style={{ padding: '8px' }}>
                  <span style={{ 
                    backgroundColor: '#28a745', 
                    color: 'white', 
                    padding: '2px 6px', 
                    borderRadius: '10px', 
                    fontSize: '0.8em'
                  }}>
                    Success
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          onClick={onClose} 
          style={{ 
            marginTop: '20px', 
            padding: '8px 16px', 
            backgroundColor: '#3498db', 
            border: 'none', 
            borderRadius: '4px', 
            color: 'white', 
            cursor: 'pointer' 
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TransactionPopup;