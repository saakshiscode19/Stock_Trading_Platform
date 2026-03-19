import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = () => {
    axios.get("https://stock-trading-platform-r8t9.onrender.com/allOrders", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => setAllOrders(res.data))
    .catch((err) => console.log("Fetch error:", err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // NEW: Function to handle the delete click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`https://stock-trading-platform-r8t9.onrender.com/deleteOrder/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        // Refresh the list locally so the row disappears immediately
        setAllOrders(allOrders.filter(order => order._id !== id));
      } catch (error) {
        alert("Failed to delete order");
      }
    }
  };

  return (
    <div style={{ padding: "20px", marginTop: "50px" }}>
      <h3 className="title">Orders ({allOrders.length})</h3>
      {allOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-table">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Action</th> {/* Added Action Column */}
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>{order.name}</td>
                  <td style={{ padding: "10px" }}>{order.qty}</td>
                  <td style={{ padding: "10px" }}>{order.price.toFixed(2)}</td>
                  <td style={{ padding: "10px", color: order.mode === "BUY" ? "#4caf50" : "#f44336" }}>
                    {order.mode}
                  </td>
                  <td style={{ padding: "10px" }}>
                    <button 
                      onClick={() => handleDelete(order._id)}
                      style={{ 
                        backgroundColor: "#ff4d4d", 
                        color: "white", 
                        border: "none", 
                        padding: "5px 10px", 
                        borderRadius: "4px", 
                        cursor: "pointer" 
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;