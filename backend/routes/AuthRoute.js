const router = require("express").Router();
const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/check-auth", userVerification, (req, res) => {
  res.json({ status: true, user: { username: req.user.username, id: req.user._id } });
});

module.exports = router;