import React from "react";
import Box from "./Box";
import AccountBalance from "./AccountBalance";

const Dashboard = () => {
  return (
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
      <div style={{ display: "flex", width: "100%",gap: "20px", marginBottom: "20px",height:"40vh" }}>
        <Box title="Balance" width="35%">
          <AccountBalance />
        </Box>
        <Box title="Transaction" width="60%">
          {/* Add transaction list here */}
        </Box>
      </div>

      <div style={{ display: "flex", gap: "20px", width: "100%", marginBottom: "20px",height:"50vh" }}>
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
  );
};

export default Dashboard;