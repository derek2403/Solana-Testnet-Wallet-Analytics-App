import React, { useState } from 'react';

const tokenData = [
  { symbol: 'BGG1', price: 0.00426485, change: 126.8, liquidity: 352240.49, imagePath: '/path/to/bgg1.png' },
  { symbol: 'DEPAY', price: 0.33701, change: 110.3, liquidity: 266302.27, imagePath: '/path/to/depay.png' },
  { symbol: 'MOON', price: 0.0019774, change: 99.94, liquidity: 199976.83, imagePath: '/path/to/moon.png' },
  { symbol: 'APES', price: 0.03045322, change: 53.41, liquidity: 630890.78, imagePath: '/path/to/apes.png' },
  { symbol: 'CLOUD', price: 0.235819, change: 40.14, liquidity: 144449.41, imagePath: '/path/to/cloud.png' },
  // Add more tokens as needed
];

const TokenRow = ({ token, showLiquidity }) => (
  <tr style={{ borderBottom: '1px solid #2c2c3d' }}>
    <td style={{ padding: '8px' }}><img src={token.imagePath} alt={token.symbol} style={{ width: '20px', height: '20px' }} /> {token.symbol}</td>
    <td style={{ padding: '8px' }}>${token.price.toFixed(8)}</td>
    <td style={{ padding: '8px' }}><span style={{ color: token.change > 0 ? '#4caf50' : '#f44336' }}>+{token.change.toFixed(2)}%</span></td>
    {showLiquidity && <td style={{ padding: '8px' }}>${token.liquidity.toLocaleString()}</td>}
  </tr>
);

const TopPerformingTokens = ({ limit, showPopup }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const displayedTokens = limit ? tokenData.slice(0, limit) : tokenData;

  return (
    <>
      <div onClick={() => showPopup && setIsPopupOpen(true)} style={{ cursor: showPopup ? 'pointer' : 'default' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2c2c3d' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Asset</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Price</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Change</th>
              {!limit && <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>Liquidity</th>}
            </tr>
          </thead>
          <tbody>
            {displayedTokens.map((token, index) => (
              <TokenRow key={index} token={token} showLiquidity={!limit} />
            ))}
          </tbody>
        </table>
        {showPopup && <p style={{ textAlign: 'center', color: '#3498db', marginTop: '10px' }}>Click to view all</p>}
      </div>

      {isPopupOpen && (
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
            overflowY: 'auto'
          }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Today's Top Performing Tokens</h2>
            <TopPerformingTokens limit={0} showPopup={false} />
            <button 
              onClick={() => setIsPopupOpen(false)}
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
      )}
    </>
  );
};

export default TopPerformingTokens;