const express = require('express')
const { signUp, signIn, getUsers, deleteUser, updateUser, getUser, } = require('../Controllers/User')
const isAuth = require('../Middlewares/isAuth')
const { registerValidation, Validation, logginValidation } = require('../Middlewares/Validator')

const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,signUp)
userRouter.post('/SignIn',logginValidation,Validation,signIn)
userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))
userRouter.get('/getUsers',getUsers)
userRouter.get('/getUser/:id',getUser)
userRouter.delete('/deleteUser/:id',deleteUser)
userRouter.put('/updateUser/:id',updateUser)   




module.exports = userRouter