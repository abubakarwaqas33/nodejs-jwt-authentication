const mongoose= require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

module.exports = mongoose.connect(process.env.DB_CONNECT,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,

        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log("Database connection failed"));

