const express = require('express')
const app = express.Router();

const connectDB = require('./db/db_connection')
connectDB();

const employeeModel = require('./models/employeeModel')

// app.use(express.json())   // This middle_ware is used for parisng the json format into javaScript Objects 

app.post('/employee', async (req,res) =>{
    try{
        const {name, email, position, department } = req.body;  // Object De_Structuring

        const newEmployee = new employeeModel({ // New Instance Create
            name, 
            email, 
            position,
            department 
        })

        const addEmployeeData = await newEmployee.save();
        res.json(addEmployeeData);  // Sending Response
    }
    catch(error){
        console.error('Error fetching employees Data:', error);
           res.status(500).send('Sever Error')
    }
});

// Start Server
module.exports = app;  // ✅ Export `app` (Server yahan start nahi hoga)