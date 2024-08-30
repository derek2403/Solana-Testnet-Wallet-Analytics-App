"use client"
import React, { useState, useEffect } from "react";
import Box from "../component/Box";
import AccountBalance from "../component/AccountBalance";
import TransactionHistory from "../component/TransactionHistory";
import TransactionPopup from "../component/TransactionPopup";
import { useTransactions } from "../hooks/useTransactions";
import { useWalletContext } from "../context/WalletContext";
import { OnChainMarkets, LiquidityChart, TopPerformingTokens } from '../component/TopPerformingTokens';
import Navbar from "@/component/Navbar";
import Background from "@/component/Background";

const MobileDashboard = () => {
  const { pkey } = useWalletContext();
  const [showPopup, setShowPopup] = useState(false);
  const { transactions, loading, error, refreshTransactions } = useTransactions(pkey);
  const [boxItemsLoaded, setBoxItemsLoaded] = useState(false);

  const boxItems = [
    { title: "Referral", image: "referral.png" },
    { title: "NFT Gallery", image: "nft.png" },
    { title: "Stake SOL/Step", image: "stake.png" },
    { title: "Reward Options", image: "reward.png" }
  ];

  useEffect(() => {
    console.log("BoxItems:", boxItems);
    setBoxItemsLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      <Background />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#1E1E2D",
          color: "#FFFFFF",
          padding: "15px",
          boxSizing: "border-box",
          marginTop: "15%",
          gap: "15px"
        }}
      >
        <Box title="Balance">
          <AccountBalance />
        </Box>
        
        <Box title="Transaction">
          {pkey ? (
            <TransactionHistory 
              transactions={transactions.slice(0, 1)} 
              loading={loading} 
              error={error} 
              refreshTransactions={refreshTransactions}
              onViewAll={() => setShowPopup(true)}
            />
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center'
            }}>
              <img 
                src="/connect-wallet-image.png" 
                alt="Connect Wallet" 
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'contain'
                }}
              />
              <p style={{ marginTop: '10px', color: '#FFFFFF', fontSize: '14px' }}>
                Please connect your wallet to view transaction history
              </p>
            </div>
          )}
        </Box>
        
        <Box title="Swap" style={{ padding: "15px", backgroundColor: "#1C1C1E", borderRadius: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
            <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
              <i className="fa fa-refresh"></i>
            </button>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              You pay
              <span style={{ color: "#888", fontSize: "12px" }}>Balance: 0</span>
            </label>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#2C2C2E", borderRadius: "8px", padding: "10px" }}>
              <img src="https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png" alt="Dollar Icon" style={{ width: "20px", marginRight: "10px" }} />
              <input type="number" value="5000" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: "16px" }} />
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              You receive
              <span style={{ color: "#888", fontSize: "12px" }}>Balance: 0</span>
            </label>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "#2C2C2E", borderRadius: "8px", padding: "10px" }}>
              <img src="https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FStepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT%2Flogo.png" alt="Bitcoin Icon" style={{ width: "20px", marginRight: "10px" }} />
              <input type="number" value="0.8511" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: "16px" }} />
            </div>
          </div>

          <button style={{ width: "100%", padding: "12px", backgroundColor: "#007BFF", border: "none", borderRadius: "8px", color: "#fff", fontSize: "16px", cursor: "pointer" }}>
            Exchange
          </button>
        </Box>
        
        <Box title="Today's Top Performing Tokens">
          <TopPerformingTokens limit={3} showPopup={true} />
        </Box>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {boxItemsLoaded ? (
            boxItems.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "calc(50% - 7.5px)",
                  height: "150px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  borderRadius: "10px",
                  backgroundColor: "#1C1C1E"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "200%",
                      height: "200%",
                      objectFit: "cover",
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      zIndex: 1,
                      opacity: 0.2,
                      transition: "all 0.3s ease-in-out"
                    }}
                  />
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      textAlign: "center",
                      width: "100%",
                      padding: "0 10px",
                      boxSizing: "border-box"
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading box items...</div>
          )}
        </div>
      </div>

      {showPopup && (
        <TransactionPopup 
          transactions={transactions} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </>
  );
};

export default MobileDashboard;