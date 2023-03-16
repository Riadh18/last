const Product = require('../Models/Product')

exports.getProducts=async(req,res)=>{
  try {
      const products = await Product.find()
      res.status(200).send({Msg : "List of products",products})
  } catch (error) {
      res.status(500).send('Could not get products')
  }
}
exports.createProduct = async(req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save()
      res.status(200).send({Msg : "List of products",newProduct})
    } catch (error) {
      res.status(500).send('Could not add product')
    }
  }

  exports.getProductById = async(req, res) => {
    // const { id } = req.params;
    // Product.findOne({ _id: id }, (err, product) => {
    //   if (err) res.status(500).send(err);
    //   res.send(product);
    // })
    try {
      const { id } = req.params
      const oneProduct = await Product.findById(id)
      res.status(200).send({Msg : "Product :",oneProduct})
    } catch (error) {
      res.status(500).send('Could not get product')
    }
  }

  exports.deleteProduct=async(req,res)=>{
    try{
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).send({msg:'Product deleted'})
    }
        catch(error){
            res.status(500).send({errors:[{msg:'Error while deleting product'}]})
        }
    }
exports.updateProduct=async(req,res)=>{
    try{
        const {id} = req.params
        await Product.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg:'Product updated'})
    } catch(error){
        res.status(500).send({msg:'cant update youre Product'})
    }
}
