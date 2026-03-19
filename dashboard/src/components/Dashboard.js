import React, { useState, useEffect } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://stock-trading-platform-r8t9.onrender.com/allHoldings", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // --- MATH LOGIC FOR SUMMARY ---
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
  const totalPnL = currentValue - totalInvestment;
  const isProfit = totalPnL >= 0;
  const pnlPercentage = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  return (
    <div className="holdings-container" style={{ padding: "20px" }}>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* --- NEW SUMMARY BAR --- */}
      <div className="stats-grid" style={{ 
        display: "flex", 
        gap: "20px", 
        marginBottom: "30px",
        flexWrap: "wrap" 
      }}>
        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px", flex: "1", minWidth: "200px", border: "1px solid #eee" }}>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>Total Investment</p>
          <h2 style={{ margin: "5px 0 0 0" }}>₹{totalInvestment.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
        </div>

        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px", flex: "1", minWidth: "200px", border: "1px solid #eee" }}>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>Current Value</p>
          <h2 style={{ margin: "5px 0 0 0", color: isProfit ? "#4caf50" : "#f44336" }}>
            ₹{currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h2>
        </div>

        <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px", flex: "1", minWidth: "200px", border: "1px solid #eee" }}>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>Total P&L</p>
          <h2 style={{ margin: "5px 0 0 0", color: isProfit ? "#4caf50" : "#f44336" }}>
            {isProfit ? "+" : ""}{totalPnL.toFixed(2)} ({pnlPercentage.toFixed(2)}%)
          </h2>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="order-table">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
              <th style={{ padding: "10px" }}>Instrument</th>
              <th style={{ padding: "10px" }}>Qty.</th>
              <th style={{ padding: "10px" }}>Avg. cost</th>
              <th style={{ padding: "10px" }}>LTP</th>
              <th style={{ padding: "10px" }}>Cur. val</th>
              <th style={{ padding: "10px" }}>P&L</th>
              <th style={{ padding: "10px" }}>Net chg.</th>
              <th style={{ padding: "10px" }}>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfitRow = pnl >= 0;

              return (
                <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>{stock.name}</td>
                  <td style={{ padding: "10px" }}>{stock.qty}</td>
                  <td style={{ padding: "10px" }}>{stock.avg.toFixed(2)}</td>
                  <td style={{ padding: "10px" }}>{stock.price.toFixed(2)}</td>
                  <td style={{ padding: "10px" }}>{curValue.toFixed(2)}</td>
                  <td style={{ padding: "10px", color: isProfitRow ? "#4caf50" : "#f44336" }}>
                    {pnl.toFixed(2)}
                  </td>
                  <td style={{ padding: "10px", color: isProfitRow ? "#4caf50" : "#f44336" }}>{stock.net}</td>
                  <td style={{ padding: "10px", color: stock.isLoss ? "#f44336" : "#4caf50" }}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;