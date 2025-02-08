// index.js
const express = require('express');
const app = express.Router();

const connectDB = require('./db/db_connection');
connectDB();

const UserModel = require('./models/user_Signup_model');





// Signup Route
app.post('/signup', async (req, res) => {

  const { username, email, password, address, phone } = req.body;  // Object Destructuring

  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Create new user
    const newUser = new UserModel({ 
        username,
        email,
        password,
        address, 
        phone 
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start Server
module.exports = app;  // ✅ Export `app` (Server yahan start nahi hoga)
