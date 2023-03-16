const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema({
    idProduit:{type : mongoose.Types.ObjectId, ref:'Product'},
    idCOwner: {type : mongoose.Types.ObjectId, ref:'collection'},
    qte: Number,
    totalPrice : Number,
    status : String
})
module.exports = mongoose.model('Commande',commandeSchema)