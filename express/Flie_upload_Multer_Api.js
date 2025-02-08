const express = require('express')
const app = express.Router();

const multer = require('multer')

const connectDB = require('./db/db_connection')
connectDB();

const fileModel = require('./models/fileModel');


const fileUpload = multer({
    storage: multer.diskStorage({
        destination : function(req, file, callback){
            callback(null, 'upload');
        },
        filename: function(req, file, callback){
            const uniqueName = file.fieldname + "-" + Date.now() + ".jpg";
            callback(null, uniqueName);
        }
    })
}).single('my_file');    // my_file is called fieldname


app.post('/file-upload', fileUpload,(req, res) =>{
    if(!req.file){
        return res.status(400).send('No File Uploaded');
    }else{
        const newFile =  new fileModel({
            filePath: req.file.path // Correctly use req.file.path
        });

        newFile.save()
        .then(()=> res.send('File Uploaded Successfully'))
        .catch((error)=> res.send('Error Uploading File',error));
    }
});

// Start Server
module.exports = app;  // ✅ Export `app` (Server yahan start nahi hoga)
