const express = require('express')
const app = express.Router();

const connectDB = require('./db/db_connection')
connectDB();

const employeeModel = require('./models/employeeModel')

app.get('/search-emp/:value', async (req,res) =>{
    let searchValue = req.params.value;
    let result = await employeeModel.find({
        '$or': [
            {'name':{$regex: searchValue, $options: 'i' }},
            {'email':{$regex: searchValue, $options: 'i' }},
            {'position':{$regex: searchValue, $options: 'i' }},
            {'department':{$regex: searchValue, $options: 'i' }}
        ]
    });
    res.send(result);

});

// Start Server
module.exports = app;  // ✅ Export `app` (Server yahan start nahi hoga)