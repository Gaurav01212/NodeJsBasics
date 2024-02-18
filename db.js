const mongoose = require('mongoose');
// import('.env')
require('dotenv').config();


// Get MongoDB URL from environment variables
// const mongoUrl = process.env.LOCAL_DB_URL;
const mongoUrl=process.env.CLOUD_DB_URL;
console.log(mongoUrl)

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
    console.error('Error while connecting to MongoDB:', error);
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB");
});

module.exports = db;
