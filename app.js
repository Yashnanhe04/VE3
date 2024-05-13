// Import required modules
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// Import route modules
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

// Set up middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/TaskManagement', err => {
  if (err) throw err;
  console.log("Mongodb connected Sucessfully");
});

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, './client/build')));

// Handle GET requests for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Set up port and start server
const port = 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});