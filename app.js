const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// Middleware
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET || "sessionSecret",
    resave: false,
    saveUninitialized: true
}));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ecom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use("/admin", require('./Routes/AdminRoutes'));
app.use("/user", require('./Routes/UserRoutes')); // Add this line

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
