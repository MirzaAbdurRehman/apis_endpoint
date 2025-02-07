
const mongoose = require('mongoose')

const ConnectDB = async () =>{ // Connect Mongo DB Atlas
    try{
        await mongoose.connect('mongodb+srv://ar3860433:ij20M402Y35FyUVQ@cluster4.xt2jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4')
        console.log('Mongo DB Connected Successfully')
    }
    catch (error){
        console.log('Mongo DB Not Connected ', error)
    }
}
module.exports = ConnectDB;