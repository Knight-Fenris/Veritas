const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.MONGO_URL;
console.log(URL);


const db = async()=>{
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db connected')
    } catch (error) {
        console.log('DB connection error')
    }
}

module.exports = {db}