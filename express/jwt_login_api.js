// index.js
const express = require('express');
const app = express();

const connectDB = require('./db/db_connection')
connectDB();

const UserModel = require('./models/user_Signup_model');

// For encryption Password
const bcrypt = require('bcryptjs');

app.use(express.json()); // Parsing


// login.js
const jwt = require('jsonwebtoken');
const secretkey = 'maddy123@!';  // Secret key


// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Step 1: Check if the user exists
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Step 2: Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Step 3: Generate a JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email }, // Payload
        secretkey, // Secret key
        { expiresIn: '1hr' } // Token expiry (1 hr)
      );
  
      // Step 4: Successful login with token
      res.status(200).json({
        message: 'Login successful',
        token, // Send the token to the client
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          address: user.address,
          phone: user.phone,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  });

  // Middleware to Extract Token
const extractToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
  
    if (!bearerHeader) {
      return res.status(401).json({ message: 'Access Denied: Token is missing or invalid' });
    }
  
    const token = bearerHeader.split(' ')[1]; // Extract token
    req.token = token;  // Attach the token to the request object
    next();
};

  // Protected Route
app.post('/protected', extractToken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, authData) => {
      if (err) {
        res.status(403).json({ message: 'Unauthorized: Invalid token' });
      } else {
        res.status(200).json({
          message: 'You are an authorized user',
          authData, // Decoded token data
        });
      }
    });
  });

// Start Server
module.exports = app;  // ✅ Export `app` (Server yahan start nahi hoga)