<div align="center">

# 📈 Zerodha Clone

**A full-stack stock trading platform clone, built to understand how real trading dashboards work — portfolio tracking, order management, and auth — from the ground up.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![JWT](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens)](https://jwt.io)

[Live Demo](https://zerodha-henna-two.vercel.app/) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## Overview

This project recreates Zerodha's trading interface — the public landing page, the signup/support flow, and the actual trading dashboard — as three separate apps working together. It was built to understand the architecture behind a real trading platform: portfolio valuation, holdings vs positions, order placement, and cookie-based authentication, rather than just styling a UI.

## 🚀 Live Demo

| | |
|---|---|
| 🌐 **Frontend** (Landing, Signup, Login, Support) | [zerodha-henna-two.vercel.app](https://zerodha-henna-two.vercel.app/) |
| 📊 **Dashboard** (Holdings, Positions, Orders, Funds) | [zerodha-kjsf.onrender.com](https://zerodha-kjsf.onrender.com) |
| ⚙️ **Backend API** | [zerodha-l494.onrender.com](https://zerodha-l494.onrender.com) |

> The backend and dashboard run on Render's free tier, so the first request after a period of inactivity may take 20–30 seconds to spin up.

## ✨ Features

**Trading Dashboard**
- Live-style holdings table with P&L calculation
- Positions and order history views
- Doughnut chart breakdown of portfolio allocation
- Buy and sell order flow with a modal order window
- Funds overview (margin used, available balance)

**Landing & Accounts**
- Public landing page (home, products, pricing, about)
- Support portal with searchable help topics and ticket creation UI
- Signup and login flows
- Cookie-based JWT authentication

**Infrastructure**
- Three independently deployed apps (frontend, dashboard, backend) communicating over REST + CORS
- SPA rewrite rules so client-side routing survives a direct page refresh

## 🛠️ Tech Stack

**Frontend & Dashboard**
- React
- React Router
- Axios
- Chart.js (Doughnut chart)
- CSS

**Backend**
- Node.js, Express
- MongoDB with Mongoose (Holdings, Positions, Orders models)
- JWT + cookie-parser for auth
- CORS

**Infrastructure**
- Dashboard & Backend hosted on **Render**
- Frontend hosted on **Vercel**
- Database on **MongoDB Atlas**

  
