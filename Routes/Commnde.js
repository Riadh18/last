const express = require('express')
const { createCommande, getCommandes, GetMyCommandes, updateCommande, deleteCommande } = require('../Controllers/Commande')
const isAuth = require('../Middlewares/isAuth')


const commandeRouter=express.Router()

commandeRouter.post('/createCommande',isAuth,createCommande)
commandeRouter.get('/getCommandes',getCommandes)
commandeRouter.get('/getMyCommandes',isAuth,GetMyCommandes)
commandeRouter.put('/updateCommande/:id',updateCommande)
commandeRouter.delete('/deleteCommande/:id',deleteCommande)



module.exports = commandeRouter