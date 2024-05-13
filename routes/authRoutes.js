const express = require("express");
const router = express.Router();

// Import signup and login functions from authControllers
const { signup, login } = require("../controllers/authControllers");

// Routes beginning with /api/auth
router.post("/signup", signup); // POST request to /api/auth/signup
router.post("/login", login); // POST request to /api/auth/login

module.exports = router;