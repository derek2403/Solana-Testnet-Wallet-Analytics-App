import React, { useState } from 'react';

const tokenData = [
  { symbol: 'BGG1', price: 0.00426485, change: 126.8, liquidity: 352240.49, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fcoin-images.coingecko.com%2Fcoins%2Fimages%2F39794%2Fsmall%2FQmTz16M9Te1xQrBkPfuuZaq1rhfKCjNj1QSwGE32mbDS9Y_%25281%2529_%25281%2529.png%3F1724117373' },
  { symbol: 'DEPAY', price: 0.33701, change: 110.3, liquidity: 266302.27, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fcoin-images.coingecko.com%2Fcoins%2Fimages%2F13183%2Fsmall%2FDEPAY.png%3F1696512965' },
  { symbol: 'MOON', price: 0.0019774, change: 99.94, liquidity: 199976.83, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fqd2ztbap7y35ga24m3m4y2zb234ellh5lx6uaw5jj4fgcdgmw7xa.arweave.net%2FgPWZhA_-N9MDXGbZzGsh1vhFrP1d_UBbqU8KYQzMt-4' },
  { symbol: 'APES', price: 0.03045322, change: 53.41, liquidity: 630890.78, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fcoin-images.coingecko.com%2Fcoins%2Fimages%2F39760%2Fsmall%2Fphoto_2024-08-16_17.29.08.png%3F1723903486' },
  { symbol: 'CLOUD', price: 0.235819, change: 40.14, liquidity: 144449.41, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Farweave.net%2FN7vCgQdgQ-fab28zEB4m8QRLMwI91_KcXI-Gtr151gg' },
  { symbol: 'SKBDI', price: 0.07341555, change: 34.59, liquidity: 337549.50, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fbafybeie62hrgtq6vp5wyoquxlfftinudhq4k4z6bk2gf4x7jgb4ro2finu.ipfs.nftstorage.link' },
  { symbol: 'r/snoofi', price: 0.01532972, change: 33.77, liquidity: 841766.54, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fimg.step.finance%2Funsafe%2Fs-128%2Fplain%2Fhttps%253A%252F%252Fcf-ipfs.com%252Fipfs%252FQmcK31fyWmRxKrHwbabqpLNbZvg98EFSZY5fE8rdQCrZFd' },
  { symbol: 'PURPE', price: 0.00001479, change: 30.12, liquidity: 331624.39, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fstatics.solscan.io%2Fcdn%2Fimgs%2Fs60%3Fref%3D68747470733a2f2f617277656176652e6e65742f574575676b676c4243354c654138544175764f763878325f3777534744554e324938315f6e597032422d41' },
  { symbol: 'HEGE', price: 0.01034074, change: 29.04, liquidity: 842288.86, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fstatics.solscan.io%2Fcdn%2Fimgs%2Fs60%3Fref%3D68747470733a2f2f62616679626569636869373579337664777432686d6c346363797064647835746f7534796668707934327a336b346c686a3634766a3268696e6f612e697066732e6e667473746f726167652e6c696e6b' },
  { symbol: '~BOZO', price: 0.01078102, change: 28.45, liquidity: 246442.54, imagePath: 'https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fbafkreiamobqahwlwio5syavvfkknvfecgt7osbsh2s4xizihgpsajethyy.ipfs.nftstorage.link' }
];

const TokenRow = ({ token, showLiquidity }) => (
  <tr style={{ borderBottom: '1px solid #2c2c3d' }}>
    <td style={{ padding: '8px' }}>
      <img
        src={token.imagePath}
        alt={token.symbol}
        style={{ width: '20px', height: '20px', borderRadius: '50%' }}
      />{' '}
      {token.symbol}
    </td>
    <td style={{ padding: '8px' }}>${token.price.toFixed(8)}</td>
    <td style={{ padding: '8px' }}>
      <span style={{ color: token.change > 0 ? '#4caf50' : '#f44336' }}>
        {token.change > 0 ? '+' : ''}
        {token.change.toFixed(2)}%
      </span>
    </td>
    {showLiquidity && (
      <td style={{ padding: '8px' }}>${token.liquidity.toLocaleString()}</td>
    )}
  </tr>
);

const OnChainMarkets = () => (
  <div style={{ marginTop: '40px' }}>
    <h2 style={{ color: 'white', marginBottom: '20px' }}>On-Chain Markets</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', width: '30%' }}>
        <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '5px' }}>$883.8M</h3>
        <p style={{ color: '#6c7293', margin: 0 }}>Total liquidity</p>
      </div>
      <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', width: '30%' }}>
        <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '5px' }}>$394.4K</h3>
        <p style={{ color: '#6c7293', margin: 0 }}>Fees earnt by users (24h)</p>
      </div>
      <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', width: '30%' }}>
        <h3 style={{ color: '#4caf50', fontSize: '24px', marginBottom: '5px' }}>+1.195%</h3>
        <p style={{ color: '#6c7293', margin: 0 }}>Liquidity (24h)</p>
      </div>
    </div>
  </div>
);

const LiquidityChart = () => (
  <div style={{ marginTop: '40px' }}>
    <h2 style={{ color: 'white', marginBottom: '20px' }}>Liquidity Chart</h2>
    <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', height: '400px' }}>
      {/* Replace this with an actual chart component */}
      <img src="/path/to/chart-placeholder.png" alt="Liquidity Chart" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/path/to/stepfinance-logo.png" alt="Step Finance" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
        <span style={{ color: 'white' }}>Step Finance</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/path/to/raydium-logo.png" alt="Raydium" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
        <span style={{ color: 'white' }}>Raydium</span>
      </div>
      {/* Add more tokens here */}
    </div>
  </div>
);

const TopPerformingTokens = ({ limit, showPopup }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const displayedTokens = limit ? tokenData.slice(0, limit) : tokenData;

  return (
    <>
      <div
        onClick={() => showPopup && setIsPopupOpen(true)}
        style={{ cursor: showPopup ? 'pointer' : 'default' }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2c2c3d' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>
                Asset
              </th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>
                Price
              </th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>
                Change
              </th>
              {!limit && (
                <th style={{ textAlign: 'left', padding: '8px', color: '#6c7293' }}>
                  Liquidity
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {displayedTokens.map((token, index) => (
              <TokenRow key={index} token={token} showLiquidity={!limit} />
            ))}
          </tbody>
        </table>
        {showPopup && (
          <p style={{ textAlign: 'center', color: '#3498db', marginTop: '10px' }}>
            Click to view all
          </p>
        )}
      </div>

      {isPopupOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#1E1E2D',
              padding: '40px',
              borderRadius: '8px',
              width: '80%',
              maxHeight: '80%',
              overflowY: 'auto',
              color: 'white',
            }}
          >
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
              Today's Top Performing Tokens
            </h2>
            <TopPerformingTokens limit={0} showPopup={false} />
            <OnChainMarkets />
            <LiquidityChart />
            <button
              onClick={() => setIsPopupOpen(false)}
              style={{
                marginTop: '40px',
                padding: '12px 24px',
                backgroundColor: '#3498db',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
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

export { OnChainMarkets, LiquidityChart, TopPerformingTokens };
