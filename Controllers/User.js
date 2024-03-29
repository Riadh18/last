const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.signUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (found) {
            return res.status(400).send({errors : [{msg : 'Email used'}]})
        }

        const newUser = new User(req.body)

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashPassword

        await newUser.save()
        
        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '168h' })

        res.status(200).send({Msg:'User Added',newUser,token})


    } catch (error) {
        res.status(500).send({errors : [{msg :'Could not SignUp'}]})
    }
}


exports.signIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : 'cant connect'}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg : 'cant connect'}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '168h' })

        res.status(200).send({Msg : 'Logged In',found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg :'cant connect'}]})
    }
}
exports.getUsers=async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({Msg : "List of users",users})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    }
}
exports.getUser=async(req,res)=>{
    try{
        const {id} = req.params
        const user=await User.findById(id)
        res.status(200).send({msg:'user',user})
    }catch(error){
        res.status(500).send({errors:[{msg:'cant get user'}]})

    }
}
exports.deleteUser=async(req,res)=>{
    try{
        const {id} = req.params
        const user=await User.findByIdAndDelete(id)
        res.status(200).send({msg:'user deleted',user})
    }
        catch(error){
            res.status(500).send({errors:[{msg:'error while deleting user '}]})
        }
    }
exports.updateUser=async(req,res)=>{
    try{
        const {id} = req.params
        const user =await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg:'user updated',user})
    } catch(error){
        res.status(500).send({msg:'cant update'})
    }
}

