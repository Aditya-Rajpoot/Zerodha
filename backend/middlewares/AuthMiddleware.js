const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "Not authenticated" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.status(401).json({ status: false, message: "Invalid token" });
    const user = await User.findById(data.id);
    if (!user) return res.status(401).json({ status: false });
    req.user = user;
    next();
  });
};