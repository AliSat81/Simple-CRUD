const mongoose = require('mongoose')
const { Schema } = mongoose 


const userSchema = new Schema ({
    email: { type: String , required: true ,unique: true},
    firstName : { type: String , required: true ,minlength: 2 },
    lastName : { type: String , required: true ,minlength: 3 },
    ip : { type :String , required : true} ,
    country : { type: String , required: true },
    city : { type: String , required: true },
    date: { type :Date , required: true ,default: Date.now },
    filename : { type : String , required: true },
    contentType : { type: String, required : true },
    //imageBase64 : { type : String, required: true } ,
    updateDate: { type: Date },
})


module.exports = User = mongoose.model('User' ,userSchema)