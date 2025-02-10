const express = require('express');
require('dotenv').config();  // Load environment variables

const app = express(); // Fix: Use express() instead of express.Router()
const route = require('./routes');

// Middleware
app.use(express.json()); // This middleware is used for parsing JSON
app.use('/api', route);

const PORT = process.env.PORT || 2000; // Use Render PORT or default 2000


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
