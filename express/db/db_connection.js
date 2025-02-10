
// const mongoose = require('mongoose')

// const ConnectDB = async () =>{ // Connect Mongo DB Atlas
//     try{
//         await mongoose.connect('mongodb+srv://ar3860433:ij20M402Y35FyUVQ@cluster4.xt2jt.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster4',{
//             useNewUrlParser: true,  // Properly parses MongoDB connection string
//             useUnifiedTopology: true // Ensures stable connection
//         })
      
//         console.log('Mongo DB Connected Successfully');
   
//     }
//     catch (error){
//         console.log('Mongo DB Not Connected ', error)
//     }
// }
// module.exports = ConnectDB;


const mongoose = require('mongoose');

const ConnectDB = async () => { 
    try {
        if (mongoose.connection.readyState === 1) {
            console.log('✅ MongoDB Already Connected');
            return;
        }

        // Get MongoDB URI from environment variables
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error('❌ MONGO_URI is missing! Add it to .env file or Render environment variables.');
        }

        await mongoose.connect(mongoURI);

        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

module.exports = ConnectDB;

