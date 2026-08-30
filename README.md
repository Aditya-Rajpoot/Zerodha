# Zerodha Clone 📈

A full-stack clone of [Zerodha's Kite] trading platform, built with the MERN stack. This project replicates core stock-trading workflows — user authentication, buying/selling stocks, live holdings tracking, and order history — across three connected applications.

🔗 **Live Demo:** [zerodha-frontend-dfxl.onrender.com](https://zerodha-frontend-dfxl.onrender.com)

---

## ✨ Features

- **Authentication** — Signup, login, and logout with JWT tokens stored in httpOnly cookies, and passwords hashed with bcrypt
- **Buy/Sell Orders** — Place buy and sell orders on any stock, with real-time order history
- **Smart Holdings** — Buying updates holdings automatically (recalculates average price), selling reduces or removes holdings depending on quantity
- **Live Price Simulation** — Stock prices fluctuate periodically on the Holdings page for a realistic "live market" feel
- **Order History** — All buy/sell orders are logged and viewable on the Orders page
- **Protected Routes** — Dashboard data (holdings, positions, orders) is only accessible to authenticated users
- **Dynamic Profile** — Logged-in username is fetched and displayed in the dashboard menu

## 🛠️ Tech Stack

**Frontend & Dashboard**
- React
- React Router
- Axios
- Chart.js (for holdings visualization)

**Backend**
- Node.js + Express
- MongoDB with Mongoose (hosted on MongoDB Atlas)
- JWT (jsonwebtoken) for authentication
- bcryptjs for password hashing
- cookie-parser + CORS for secure cross-origin auth

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- A MongoDB Atlas connection string

## 📝 API Overview

| Method | Route            | Description                          |
|--------|-------------------|---------------------------------------|
| POST   | `/signup`         | Create a new user account             |
| POST   | `/login`          | Authenticate and receive a session cookie |
| POST   | `/logout`         | Clear the session cookie              |
| GET    | `/check-auth`     | Verify current login status           |
| GET    | `/allholdings`    | Fetch the logged-in user's holdings   |
| GET    | `/allpositions`   | Fetch the logged-in user's positions  |
| GET    | `/allOrders`      | Fetch order history                   |
| POST   | `/newOrder`       | Place a buy or sell order             |

## 📌 Notes

- This is a **learning/portfolio project** and is not affiliated with Zerodha Broking Ltd. in any way.
- Live prices are simulated for demo purposes rather than pulled from a real market data feed.

## 👤 Author

**Aditya Rajpoot**  
GitHub: [@Aditya-Rajpoot](https://github.com/Aditya-Rajpoot)
