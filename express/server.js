const express = require('express');
const app = express(); // Fix: Use express() instead of express.Router()

const route = require('./routes');

// Middleware
app.use(express.json()); // This middleware is used for parsing JSON
app.use('/api', route);

const PORT = 2000; 

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
