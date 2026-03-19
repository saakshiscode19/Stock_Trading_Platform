# 📈 Stock Trading Platform

A full-stack, comprehensive stock trading platform and portfolio management dashboard. Built to simulate a real-world brokerage interface, this application allows users to securely sign up, view live market visualizations, manage their holdings, and execute buy/sell orders.

**Live Demo:** [Trading Dashboard](https://stock-trading-platform-blush.vercel.app)  
**Backend API:** [Render Server](https://stock-trading-platform-r8t9.onrender.com)

---

## ✨ Key Features

* **Secure Authentication:** User signup and login utilizing encrypted passwords (`bcryptjs`) and JSON Web Tokens (JWT) for session management.
* **Interactive Dashboard:** Real-time visualization of equity and market trends using dynamic graphs.
* **Portfolio Management:** Automatically calculates Total Investment, Current Value, and Total P&L across all user holdings.
* **Order Execution:** A functional Watchlist that allows users to seamlessly place 'Buy' and 'Sell' orders.
* **Database Integration:** Fully persistent data storage for user positions, holdings, and order history, with the ability to delete past orders.

---

## 💻 Tech Stack

**Frontend (`/dashboard` & `/frontend`)**
* React.js
* React Router DOM
* Axios (for API communication)
* Custom CSS / Flexbox Layouts

**Backend (`/backend`)**
* Node.js & Express.js
* MongoDB Atlas & Mongoose (ODM)
* JWT (Authentication)

---

## 📂 Repository Structure

The project is structured into three main directories to separate the landing page, the authenticated dashboard, and the server logic:

```text
📦 Stock_Trading_Platform
 ┣ 📂 backend       # Express server, MongoDB models, Auth middleware, API routes
 ┣ 📂 dashboard     # The authenticated React application (Trading View, Holdings, Orders)
 ┗ 📂 frontend      # The public-facing React landing page

