const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.ATLAS_URI


const Connect = async () => {
    try{
        // mongodb clund connection
        const con = await mongoose.connect(uri , {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect

