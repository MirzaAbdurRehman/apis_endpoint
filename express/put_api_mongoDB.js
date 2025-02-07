const express = require('express')
const app = express();

const connectDB = require('./db/db_connection');
connectDB();

const employeeModel = require('./models/employeeModel');

app.use(express.json())   // This middle_ware is used for parisng the json format into javaScript Objects 

app.put('/employee/:id', async (req,res) => {  // Use put method when update all the fields of data
    try{

        const employeeID = req.params.id
        const {name, email, position, department } = req.body;  // Object De_Structuring

        const UpdateEmployee = await employeeModel.findByIdAndUpdate(
            employeeID,
            {name, email, position, department },  // Ye Data Update krna hoga 
            {new : true}
        );

        if(!UpdateEmployee){
            return res.status(404).send({msg: 'Employee Not Found!'})
        }
        else{
            res.send({msg: 'Emplyee Updated Successfully!.'})
        }
        
    }
    catch(error){
        console.error('Error fetching employees Data:', error);
           res.status(500).send('Sever Error')
    }
});


app.listen(2000, () => {
    console.log('Server is running on Port: 2000');
});