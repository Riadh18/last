const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : {type : String, required : true, unique : true},
    adress : String,
    picture : String,
    phone : Number,
    password :{type:String, required : true},
    role : String
})

module.exports = mongoose.model('collection',userSchema)
