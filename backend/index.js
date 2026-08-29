require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const { createSecretToken } = require("./util/SecretToken");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: ["https://zerodha-frontend-dfxl.onrender.com", "https://zerodha-dashboard-xj7p.onrender.com"], 
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

// ---------- AUTH MIDDLEWARE ----------
const userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ status: false, message: "Not authenticated" });

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.status(401).json({ status: false, message: "Invalid token" });
    const user = await UserModel.findById(data.id);
    if (!user) return res.status(401).json({ status: false });
    req.user = user;
    next();
  });
};

// ---------- AUTH ROUTES ----------
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
    const user = await UserModel.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000, secure: true, sameSite: "none" });
    res.status(201).json({ success: true, message: "Account created", user: { id: user._id, username } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000, secure: true, sameSite: "none" });
    res.status(200).json({ success: true, message: "Logged in", user: { id: user._id, username: user.username } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "none" });
  res.status(200).json({ success: true, message: "Logged out" });
});

app.get("/check-auth", userVerification, (req, res) => {
  res.json({ status: true, user: { username: req.user.username, id: req.user._id } });
});

// ---------- EXISTING ROUTES (ab protected) ----------
app.get("/allholdings", userVerification, async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  res.json(allholdings);
});

app.get("/allpositions", userVerification, async (req, res) => {
  let allpositions = await PositionsModel.find({});
  res.json(allpositions);
});

app.post("/newOrder", userVerification, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const existingHolding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (existingHolding) {
        const newQty = existingHolding.qty + qty;
        const newAvg =
          (existingHolding.avg * existingHolding.qty + price * qty) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;
        existingHolding.price = price;
        await existingHolding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }
    } else if (mode === "SELL") {
      if (!existingHolding) {
        return res.status(400).json({
          success: false,
          message: "You don't own this stock",
        });
      }

      if (existingHolding.qty < qty) {
        return res.status(400).json({
          success: false,
          message: "Insufficient quantity to sell",
        });
      }

      if (existingHolding.qty === qty) {
        await HoldingsModel.deleteOne({ name });
      } else {
        existingHolding.qty -= qty;
        existingHolding.price = price;
        await existingHolding.save();
      }
    } else {
      return res.status(400).json({ success: false, message: "Invalid mode" });
    }

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    res.status(200).json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.get("/allOrders", userVerification, async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("app started !");
  mongoose.connect(uri);
  console.log("DB Connected");
});