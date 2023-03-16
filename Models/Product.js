const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    description: String,
    price: Number,
    pic : String
})
module.exports = mongoose.model('Product',productSchema)