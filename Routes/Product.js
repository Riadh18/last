const express = require('express')
const {deleteProduct,updateProduct, getProducts, createProduct, getProductById}  = require('../Controllers/Product')


const productRouter=express.Router()

productRouter.post('/createProduct',createProduct)
productRouter.get('/getProduct',getProducts)
productRouter.get('/getOneProduct/:id',getProductById)
productRouter.put('/updateProduct/:id',updateProduct)
productRouter.delete('/deleteProduct/:id',deleteProduct)
 


module.exports = productRouter

