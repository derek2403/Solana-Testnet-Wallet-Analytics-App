import React, { useState } from "react";
import Box from "./Box";
import AccountBalance from "./AccountBalance";
import TransactionHistory from "./TransactionHistory";
import TransactionPopup from "./TransactionPopup";
import { useTransactions } from "../hooks/useTransactions";
import { useWalletContext } from "../context/WalletContext";

const Dashboard = () => {
  const { pkey } = useWalletContext();
  const [showPopup, setShowPopup] = useState(false);
  const { transactions, loading, error, refreshTransactions } = useTransactions(pkey);

  return (
    <>
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
            <TransactionHistory 
              transactions={transactions.slice(0, 1)} 
              loading={loading} 
              error={error} 
              refreshTransactions={refreshTransactions}
              onViewAll={() => setShowPopup(true)}
            />
          </Box>
        </div>

        <div style={{ display: "flex", gap: "20px", width: "100%", marginBottom: "20px", height: "50vh" }}>
          <Box title="Exchange" width="23%">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>1 BTC → 53,260.20 USD</span>
            </div>
            {/* Add exchange form here */}
          </Box>
          <Box title="Overall Growth" width="74%">
            {/* Add growth chart here */}
          </Box>
        </div>

        <div style={{ display: "flex", gap: "20px", width: "100%" }}>
          <Box width="23%">
            <div>Bitcoin</div>
            <div>USD 53,260.20</div>
          </Box>
          <Box width="23%">
            <div>Ethereum</div>
            <div>USD 1,643.80</div>
          </Box>
          <Box width="23%">
            <div>Tether</div>
            <div>USD 0.9999</div>
          </Box>
          <Box width="23%">
            <div>Binance Coin</div>
            <div>USD 247.43</div>
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