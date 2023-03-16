const Commande = require("../Models/Commande")

exports.getCommandes=async(req,res)=>{
    try {
        const commandes = await Commande.find().populate('idProduit').populate('idCOwner')
        res.status(200).send({Msg : "List of Commandes",commandes})
    } catch (error) {
        res.status(500).send('Could not get Commandes')
    }
  }
  exports.createCommande= async(req, res) => {
      try {
        console.log(req.user)
        const newCommande = new Commande({...req.body,idCOwner : req.user._id});
        await newCommande.save()
        res.status(200).send({Msg : "List of Commandes",newCommande})
      } catch (error) {
        res.status(500).send('Could not add commande')
      }
    }

    exports.GetMyCommandes = async (req, res) => {
      try {
          const commandes = await Commande.find({ idCOwner: req.user._id }).populate("idProduit").populate('idCOwner')
  
          res.status(200).send({ msg: 'My commandes List : ', commandes })
      } catch (error) {
          res.status(500).send({ msg: 'Can not get my commandes' })
  
      }
  }


  exports.updateCommande = async (req,res)=>{
    const {id} = req.params
    try {
        const updateCommande = await Commande.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({ msg:'Commande updated'});
    } catch (error) {
        res.status(500).send({msg:'could not update'})
    }
}

exports.deleteCommande = async (req, res) => {

  const { id } = req.params
  try {
      await Commande.findByIdAndDelete(id)
      res.status(200).send({ msg: 'deleted' });
  } catch (error) {
      res.status(500).send({ msg: "could not delete" })
  }
}