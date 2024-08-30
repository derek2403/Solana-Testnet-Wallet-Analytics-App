import React, { useState, useEffect } from "react";
import Box from "./Box";
import AccountBalance from "./AccountBalance";
import TransactionHistory from "./TransactionHistory";
import TransactionPopup from "./TransactionPopup";
import { useTransactions } from "../hooks/useTransactions";
import { useWalletContext } from "../context/WalletContext";
import { OnChainMarkets, LiquidityChart, TopPerformingTokens } from './TopPerformingTokens';
import Background from "./Background";
import Navbar from "./Navbar/Navbar";


const Dashboard = () => {
  const { pkey } = useWalletContext();
  const [showPopup, setShowPopup] = useState(false);
  const { transactions, loading, error, refreshTransactions } = useTransactions(pkey);


  return (
    <>
      <Background/>
      <Navbar/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#1E1E2D",
          color: "#FFFFFF",
          padding: "20px",
          boxSizing: "border-box",
          marginTop: "5%",
        }}
      >
        <div style={{ display: "flex", width: "100%", gap: "20px", marginBottom: "20px", height: "40vh" }}>
          <Box title="Balance" width="35%">
            <AccountBalance />
          </Box>
          <Box title="Transaction" width="60%">
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
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain'
                  }}
                />
                <p style={{ marginTop: '10px', color: '#FFFFFF' }}>
                  Please connect your wallet to view transaction history
                </p>
              </div>
            )}
          </Box>
        </div>

        <div style={{ display: "flex", gap: "20px", width: "100%", marginBottom: "20px", height: "60vh" }}>
          <Box title="Swap" width="23%" style={{ padding: "20px", backgroundColor: "#1C1C1E", borderRadius: "10px", color: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
                <i className="fa fa-refresh"></i>
              </button>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                You pay
                <span style={{ color: "#888", fontSize: "14px" }}>Balance: 0</span>
              </label>
              <div style={{ display: "flex", alignItems: "center", backgroundColor: "#2C2C2E", borderRadius: "8px", padding: "10px" }}>
                <img src="https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png" alt="Dollar Icon" style={{ width: "20px", marginRight: "10px" }} />
                <input type="number" value="5000" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: "18px", marginRight: "10px" }} />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                You recieve
                <span style={{ color: "#888", fontSize: "14px" }}>Balance: 0</span>
              </label>
              <div style={{ display: "flex", alignItems: "center", backgroundColor: "#2C2C2E", borderRadius: "8px", padding: "10px" }}>
                <img src="https://img.step.finance/unsafe/s-32/plain/https%3A%2F%2Fraw.githubusercontent.com%2Fsolana-labs%2Ftoken-list%2Fmain%2Fassets%2Fmainnet%2FStepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT%2Flogo.png" alt="Bitcoin Icon" style={{ width: "20px", marginRight: "10px" }} />
                <input type="number" value="0.8511" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: "18px", marginRight: "10px" }} />
              </div>
            </div>

            <button style={{ width: "100%", padding: "15px", backgroundColor: "#007BFF", border: "none", borderRadius: "8px", color: "#fff", fontSize: "18px", cursor: "pointer" }}>
              Exchange
            </button>
          </Box>
          <Box title="Today's Top Performing Tokens" width="72%">
            <TopPerformingTokens limit={5} showPopup={true} />
          </Box>
        </div>

        <div style={{ display: "flex", gap: "20px", width: "100%", height: "35vh" }}>
        <Box 
            width="23%" 
            style={{ 
              position: "relative", 
              overflow: "hidden", 
              height: "30vh", // Adjust this value as needed
              cursor: "pointer"
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
                src="referral.png" 
                alt="referral" 
                style={{ 
                  width: "200%", // Increased from 100% to allow for revealing
                  height: "200%", // Increased from 100% to allow for revealing
                  objectFit: "cover", 
                  position: "absolute", 
                  top: "-35%",
                  left: "-50%", 
                  zIndex: -1, 
                  opacity: 0.2,
                  transition: "all 0.3s ease-in-out"
                }} 
              />
              <div 
                style={{ 
                  fontSize: "2rem", 
                  fontWeight: "bold", 
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1
                }}
              >
                Referral
              </div>
            </div>
            <style jsx>{`
              .nft-box:hover img {
                top: 0;
                left: 0;
                opacity: 0.4;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </Box>
          <Box 
            width="23%" 
            style={{ 
              position: "relative", 
              overflow: "hidden", 
              height: "30vh", // Adjust this value as needed
              cursor: "pointer"
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
                src="nft.png" 
                alt="NFT" 
                style={{ 
                  width: "100%", // Increased from 100% to allow for revealing
                  height: "100%", // Increased from 100% to allow for revealing
                  objectFit: "cover", 
                  position: "absolute",  
                  zIndex: -1, 
                  opacity: 0.2,
                  transition: "all 0.3s ease-in-out"
                }} 
              />
              <div 
                style={{ 
                  fontSize: "2rem", 
                  fontWeight: "bold", 
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  textAlign: "center"
                }}
              >
                NFT Gallery
              </div>
            </div>
            <style jsx>{`
              .nft-box:hover img {
                top: 0;
                left: 0;
                opacity: 0.4;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </Box>
          <Box 
            width="23%" 
            style={{ 
              position: "relative", 
              overflow: "hidden", 
              height: "30vh", // Adjust this value as needed
              cursor: "pointer"
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
                src="stake.png" 
                alt="referral" 
                style={{ 
                  width: "100%", // Increased from 100% to allow for revealing
                  height: "100%", // Increased from 100% to allow for revealing
                  objectFit: "cover", 
                  position: "absolute", 
                  top: "0%",
                  left: "0", 
                  zIndex: -1, 
                  opacity: 0.2,
                  transition: "all 0.3s ease-in-out"
                }} 
              />
              <div 
                style={{ 
                  fontSize: "2rem", 
                  fontWeight: "bold", 
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  textAlign: "center"
                }}
              >
                Stake SOL/Step
              </div>
            </div>
            <style jsx>{`
              .nft-box:hover img {
                top: 0;
                left: 0;
                opacity: 0.4;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </Box>
          <Box 
            width="23%" 
            style={{ 
              position: "relative", 
              overflow: "hidden", 
              height: "30vh", // Adjust this value as needed
              cursor: "pointer"
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
                src="reward.png" 
                alt="referral" 
                style={{ 
                  width: "110%", // Increased from 100% to allow for revealing
                  height: "110%", // Increased from 100% to allow for revealing
                  objectFit: "cover", 
                  position: "absolute", 
                  top: "0%",
                  left: "-5%", 
                  zIndex: -1, 
                  opacity: 0.2,
                  transition: "all 0.3s ease-in-out"
                }} 
              />
              <div 
                style={{ 
                  fontSize: "2rem", 
                  fontWeight: "bold", 
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  textAlign: "center"
                }}
              >
                Reward Options
              </div>
            </div>
            <style jsx>{`
              .nft-box:hover img {
                top: 0;
                left: 0;
                opacity: 0.4;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </Box>
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

export default Dashboard;